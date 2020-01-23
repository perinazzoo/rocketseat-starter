import React, { Component } from "react";
import Api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
  state = {
    members: [],
    memberInfo: {},
    page: 1
  };

  componentDidMount() {
    this.loadMembers();
  }

  loadMembers = async (page = 1) => {
    const response = await Api.get(`/members?page=${page}`);

    const { docs, ...memberInfo } = response.data;

    this.setState({ members: docs, memberInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadMembers(pageNumber);
  };

  nextPage = () => {
    const { page, memberInfo } = this.state;

    if (page === memberInfo.pages) return;

    const pageNumber = page + 1;

    this.loadMembers(pageNumber);
  };

  render() {
    const { members, page, memberInfo } = this.state;

    return (
      <div className="member-list">
        <p className="total">Membros encontrados: {memberInfo.total}</p>
        {members.map(member => (
          <article key={member._id}>
            <strong>{member.name}</strong>
            <p>{`Idade: ${member.age}`}</p>
            <p>{`Reside no estado: ${member.estado}`}</p>
            <Link to={`/members/${member._id}`}>Veja mais</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <p>{`Página ${page} de ${memberInfo.pages}`}</p>
          <button disabled={page === memberInfo.pages} onClick={this.nextPage}>
            Próxima
          </button>
        </div>
      </div>
    );
  }
}
