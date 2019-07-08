package com.minea.sisas.domain;


import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A RelatoriosLog.
 */
@Entity
@Table(name = "relatorios_log")
public class RelatoriosLog implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_relatorios_log", nullable = false)
    private Long id;

    @NotNull
    @Size(max = 50)
    @Column(name = "acao", length = 50, nullable = false)
    private String acao;

    @NotNull
    @Column(name = "id_usuario", nullable = false)
    private Long idUsuario;

    @NotNull
    @Size(max = 3500)
    @Column(name = "jhi_log", length = 3500, nullable = false)
    private String log;

    @NotNull
    @Column(name = "dt_log", nullable = false)
    private LocalDate dtLog;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAcao() {
        return acao;
    }

    public RelatoriosLog acao(String acao) {
        this.acao = acao;
        return this;
    }

    public void setAcao(String acao) {
        this.acao = acao;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public RelatoriosLog idUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
        return this;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getLog() {
        return log;
    }

    public RelatoriosLog log(String log) {
        this.log = log;
        return this;
    }

    public void setLog(String log) {
        this.log = log;
    }

    public LocalDate getDtLog() {
        return dtLog;
    }

    public RelatoriosLog dtLog(LocalDate dtLog) {
        this.dtLog = dtLog;
        return this;
    }

    public void setDtLog(LocalDate dtLog) {
        this.dtLog = dtLog;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        RelatoriosLog relatoriosLog = (RelatoriosLog) o;
        if (relatoriosLog.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), relatoriosLog.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "RelatoriosLog{" +
            "id=" + getId() +
            ", acao='" + getAcao() + "'" +
            ", idUsuario=" + getIdUsuario() +
            ", log='" + getLog() + "'" +
            ", dtLog='" + getDtLog() + "'" +
            "}";
    }
}
