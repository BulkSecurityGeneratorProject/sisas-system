package com.minea.sisas.service.dto;

import java.io.Serializable;
import io.github.jhipster.service.filter.BooleanFilter;
import io.github.jhipster.service.filter.DoubleFilter;
import io.github.jhipster.service.filter.Filter;
import io.github.jhipster.service.filter.FloatFilter;
import io.github.jhipster.service.filter.IntegerFilter;
import io.github.jhipster.service.filter.LongFilter;
import io.github.jhipster.service.filter.StringFilter;


import io.github.jhipster.service.filter.LocalDateFilter;



/**
 * Criteria class for the ConfiguracoesLog entity. This class is used in ConfiguracoesLogResource to
 * receive all the possible filtering options from the Http GET request parameters.
 * For example the following could be a valid requests:
 * <code> /configuracoes-logs?id.greaterThan=5&amp;attr1.contains=something&amp;attr2.specified=false</code>
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class ConfiguracoesLogCriteria implements Serializable {
    private static final long serialVersionUID = 1L;


    private LongFilter id;

    private LongFilter idConfiguracoesLog;

    private StringFilter acao;

    private LongFilter idUsuario;

    private StringFilter log;

    private LocalDateFilter dtLog;

    public ConfiguracoesLogCriteria() {
    }

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public LongFilter getIdConfiguracoesLog() {
        return idConfiguracoesLog;
    }

    public void setIdConfiguracoesLog(LongFilter idConfiguracoesLog) {
        this.idConfiguracoesLog = idConfiguracoesLog;
    }

    public StringFilter getAcao() {
        return acao;
    }

    public void setAcao(StringFilter acao) {
        this.acao = acao;
    }

    public LongFilter getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(LongFilter idUsuario) {
        this.idUsuario = idUsuario;
    }

    public StringFilter getLog() {
        return log;
    }

    public void setLog(StringFilter log) {
        this.log = log;
    }

    public LocalDateFilter getDtLog() {
        return dtLog;
    }

    public void setDtLog(LocalDateFilter dtLog) {
        this.dtLog = dtLog;
    }

    @Override
    public String toString() {
        return "ConfiguracoesLogCriteria{" +
                (id != null ? "id=" + id + ", " : "") +
                (idConfiguracoesLog != null ? "idConfiguracoesLog=" + idConfiguracoesLog + ", " : "") +
                (acao != null ? "acao=" + acao + ", " : "") +
                (idUsuario != null ? "idUsuario=" + idUsuario + ", " : "") +
                (log != null ? "log=" + log + ", " : "") +
                (dtLog != null ? "dtLog=" + dtLog + ", " : "") +
            "}";
    }

}
