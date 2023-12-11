import React from "react";
import { Dado } from "../../classes/Construtores/Dado";

interface Prop {
  dado: Dado;
}

export default function addHistorico({ dado }: Prop) {
  const arrayAntiga = JSON.parse(localStorage.getItem("historico") || "[]");
  const arrayNova = [...arrayAntiga, dado];
  localStorage.setItem("historico", JSON.stringify(arrayNova));
}
