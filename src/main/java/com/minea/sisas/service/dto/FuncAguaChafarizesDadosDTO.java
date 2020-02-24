package com.minea.sisas.service.dto;


import java.io.Serializable;

/**
 * A DTO for the Projectos entity.
 */
public class FuncAguaChafarizesDadosDTO implements Serializable {

    private String nomeProvincia;
    private Integer numeroSistemas;
    private Integer funcionamAgua;
    private Integer naoFuncionamAgua;
    private Float funcionamAguaPerc;
    private Float naoFuncionamAguaPerc;
    private Integer numeroChafarizes;

    private Integer funcionamChafariz;
    private Integer naoFuncionamChafariz;
    private Float funcionamChafarizPerc;
    private Float naoFuncionamChafarizPerc;

    public FuncAguaChafarizesDadosDTO() {
    }

    public FuncAguaChafarizesDadosDTO(String nomeProvincia, Integer numeroSistemas, Integer funcionamAgua, Integer naoFuncionamAgua, Float funcionamAguaPerc, Float naoFuncionamAguaPerc, Integer numeroChafarizes, Integer funcionamChafariz, Integer naoFuncionamChafariz, Float funcionamChafarizPerc, Float naoFuncionamChafarizPerc) {
        this.nomeProvincia = nomeProvincia;
        this.numeroSistemas = numeroSistemas;
        this.funcionamAgua = funcionamAgua;
        this.naoFuncionamAgua = naoFuncionamAgua;
        this.funcionamAguaPerc = funcionamAguaPerc;
        this.naoFuncionamAguaPerc = naoFuncionamAguaPerc;
        this.numeroChafarizes = numeroChafarizes;
        this.funcionamChafariz = funcionamChafariz;
        this.naoFuncionamChafariz = naoFuncionamChafariz;
        this.funcionamChafarizPerc = funcionamChafarizPerc;
        this.naoFuncionamChafarizPerc = naoFuncionamChafarizPerc;
    }

    public String getNomeProvincia() {
        return nomeProvincia;
    }

    public void setNomeProvincia(String nomeProvincia) {
        this.nomeProvincia = nomeProvincia;
    }

    public Integer getNumeroSistemas() {
        return numeroSistemas;
    }

    public void setNumeroSistemas(Integer numeroSistemas) {
        this.numeroSistemas = numeroSistemas;
    }

    public Integer getFuncionamAgua() {
        return funcionamAgua;
    }

    public void setFuncionamAgua(Integer funcionamAgua) {
        this.funcionamAgua = funcionamAgua;
    }

    public Integer getNaoFuncionamAgua() {
        return naoFuncionamAgua;
    }

    public void setNaoFuncionamAgua(Integer naoFuncionamAgua) {
        this.naoFuncionamAgua = naoFuncionamAgua;
    }

    public Float getFuncionamAguaPerc() {
        return funcionamAguaPerc;
    }

    public void setFuncionamAguaPerc(Float funcionamAguaPerc) {
        this.funcionamAguaPerc = funcionamAguaPerc;
    }

    public Float getNaoFuncionamAguaPerc() {
        return naoFuncionamAguaPerc;
    }

    public void setNaoFuncionamAguaPerc(Float naoFuncionamAguaPerc) {
        this.naoFuncionamAguaPerc = naoFuncionamAguaPerc;
    }

    public Integer getNumeroChafarizes() {
        return numeroChafarizes;
    }

    public void setNumeroChafarizes(Integer numeroChafarizes) {
        this.numeroChafarizes = numeroChafarizes;
    }

    public Integer getFuncionamChafariz() {
        return funcionamChafariz;
    }

    public void setFuncionamChafariz(Integer funcionamChafariz) {
        this.funcionamChafariz = funcionamChafariz;
    }

    public Integer getNaoFuncionamChafariz() {
        return naoFuncionamChafariz;
    }

    public void setNaoFuncionamChafariz(Integer naoFuncionamChafariz) {
        this.naoFuncionamChafariz = naoFuncionamChafariz;
    }

    public Float getFuncionamChafarizPerc() {
        return funcionamChafarizPerc;
    }

    public void setFuncionamChafarizPerc(Float funcionamChafarizPerc) {
        this.funcionamChafarizPerc = funcionamChafarizPerc;
    }

    public Float getNaoFuncionamChafarizPerc() {
        return naoFuncionamChafarizPerc;
    }

    public void setNaoFuncionamChafarizPerc(Float naoFuncionamChafarizPerc) {
        this.naoFuncionamChafarizPerc = naoFuncionamChafarizPerc;
    }
}
