import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import "./Admin.css";

function Admin() {
const [contacts, setContacts] = useState([]);
const [search, setSearch] = useState("");

const navigate = useNavigate();

async function loadContacts() {
    try {
        const response = await api.get("/contacts");

        setContacts(response.data);

    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadContacts();
}, []);

async function handleDelete(id) {
    const confirmDelete = window.confirm(
        "Deseja excluir este contato?"
    );

    if (!confirmDelete) return;

    try {
        await api.delete(`/contacts/${id}`);

        loadContacts();

    } catch (error) {
        console.error(error);
    }
}

async function copyEmail(email) {
    try {
        await navigator.clipboard.writeText(email);

        alert("E-mail copiado!");

    } catch (error) {
        console.error(error);
    }
}

function handleLogout() {
    localStorage.removeItem("@otica:token");

    navigate("/login");
}

const today = new Date();

const contactsToday = contacts.filter((contact) => {
    const contactDate = new Date(contact.createdAt);

    return (
        contactDate.getDate() === today.getDate() &&
        contactDate.getMonth() === today.getMonth() &&
        contactDate.getFullYear() === today.getFullYear()
    );
});

const contactsWeek = contacts.filter((contact) => {
    const contactDate = new Date(contact.createdAt);

    const diffTime =
        today.getTime() - contactDate.getTime();

    const diffDays =
        diffTime / (1000 * 60 * 60 * 24);

    return diffDays <= 7;
});

const filteredContacts = contacts.filter((contact) =>
    contact.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

    contact.email
        .toLowerCase()
        .includes(search.toLowerCase())
);

return (
    <section className="admin">

        <div className="container">

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                Sair
            </button>

            <h1>Painel Administrativo</h1>

            <p>
                Mensagens recebidas pelo formulário
            </p>

            <div className="stats-grid">

                <div className="stats-card">
                    <h2>{contacts.length}</h2>
                    <span>Total de Mensagens</span>
                </div>

                <div className="stats-card">
                    <h2>{contactsToday.length}</h2>
                    <span>Hoje</span>
                </div>

                <div className="stats-card">
                    <h2>{contactsWeek.length}</h2>
                    <span>Últimos 7 Dias</span>
                </div>

            </div>

            <div className="search-box">

                <input
                    type="text"
                    placeholder="Buscar por nome ou e-mail..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            <div className="contacts-grid">

                {filteredContacts.length === 0 ? (
                    <div className="empty-state">
                        Nenhum contato encontrado.
                    </div>
                ) : (
                    filteredContacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="contact-card"
                        >

                            <h3>{contact.name}</h3>

                            <span className="contact-phone">
                                📱 {contact.phone || "Não informado"}
                            </span>

                            <span className="contact-email">
                                ✉️ {contact.email}
                            </span>

                            <small className="contact-date">
                                {new Date(
                                    contact.createdAt
                                ).toLocaleString("pt-BR")}
                            </small>

                            <p>
                                {contact.message}
                            </p>

                            {contact.phone && (
                                <a
                                    href={`https://wa.me/55${contact.phone.replace(/\D/g, "")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="whatsapp-btn"
                                >
                                    📱 WhatsApp
                                </a>
                            )}

                            <button
                                className="copy-btn"
                                onClick={() =>
                                    copyEmail(contact.email)
                                }
                            >
                                📋 Copiar E-mail
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() =>
                                    handleDelete(contact.id)
                                }
                            >
                                Excluir
                            </button>

                        </div>
                    ))
                )}

            </div>

        </div>

    </section>
);

}

export default Admin;
