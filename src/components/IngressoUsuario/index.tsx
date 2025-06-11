"use client";

import { useSearchParams } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";

export function IngressoUsuario() {
  const params = useSearchParams();

  const nomeEvento = params.get("nomeEvento") ?? "";
  const participante = params.get("participante") ?? "";
  const emailParticipante = params.get("emailParticipante") ?? "";
  const categoria = params.get("categoria") ?? "";
  const data = params.get("data") ?? "";
  const hora = params.get("hora") ?? "";
  const local = params.get("local") ?? "";

  const qrRef = useRef<SVGSVGElement>(null);

  function baixarQRCode() {
    if (!qrRef.current) return;

    // Pega o SVG
    const svg = qrRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    // Cria link para download
    const link = document.createElement("a");
    link.href = url;
    link.download = `${participante}-${nomeEvento}-qrcode.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row bg-white rounded-xl shadow-md">
      <div className="md:w-1/2 flex flex-col items-center justify-center border-r  md:pr-8 mb-8 md:mb-0">
        <QRCodeSVG
          ref={qrRef}
          value={`Ingresso-${participante}-${nomeEvento}`}
          size={128}
        />
        <p className="text-sm font-mono text-gray-500">TQR4567JU10</p>
        <button
          onClick={baixarQRCode}
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
        >
          Baixar QR Code
        </button>
      </div>

      <div className="md:w-1/2 space-y-4 pl-12">
        <h2 className="text-xl font-bold text-gray-800">{nomeEvento}</h2>

        <p>
          <strong>Participante:</strong> {participante}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${emailParticipante}`} className="text-blue-600">
            {emailParticipante}
          </a>
        </p>

        <p>
          <strong>Tipo:</strong> {categoria}
        </p>
        <p>
          <strong>Data:</strong> {data}
        </p>
        <p>
          <strong>Horário:</strong> {hora}
        </p>
        <p>
          <strong>Local:</strong> {local}
        </p>
        <a href="#" className="text-yellow-500 hover:underline">
          Ver local
        </a>
      </div>
    </div>
  );
}
