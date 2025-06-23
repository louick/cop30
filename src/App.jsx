import React, { useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import SegmentCard from "./components/SegmentCard";
import { FeatureModal } from "./components/FeatureModal";

const COLORS = {
  color1: "#fba304",
  color2: "#f4cc74",
  color3: "#05657d",
  color4: "#9d7453",
  color5: "#d4c4b4",
};

const BASE = import.meta.env.MODE === "production" ? "/cop30" : "";

const SEGMENTOS = [
  {
    image: `${BASE}/images/restaurante.jpg`,
    title: "Restaurantes",
    badge: "Sistema Inteligente de Reservas",
    description: "Menu digital multilíngue, pedidos pelo QR code, fotos de pratos e destaque no mapa oficial da COP30.",
    badgeColor: COLORS.color1,
    features: [
      { title: "Reservas em tempo real com pagamento internacional", desc: "Menos no-show e mais faturamento." },
      { title: "Menu digital interativo", desc: "QR code e conteúdo multimídia sobre os pratos." },
      { title: "Pagamentos rápidos", desc: "Stripe, PayPal, PIX, MercadoPago (zero burocracia)." },
      { title: "Avaliações automáticas traduzidas", desc: "Dashboard de feedback em tempo real." },
      { title: "Chatbot 24h", desc: "Treinado para COP30 e turistas internacionais." },
      { title: "Gestão inteligente de estoque", desc: "Alertas e integração com fornecedores locais." },
      { title: "Eventos e promoções relâmpago", desc: "Para turistas próximos (WhatsApp/push)." },
      { title: "Filtros de restrição alimentar", desc: "Transparência para veganos/celíacos." },
      { title: "Tour gastronômico integrado", desc: "Integração ao turismo local." },
      { title: "Dashboard com performance financeira", desc: "Pratos mais pedidos e tendências." }
    ]
  },
  {
    image: `${BASE}/images/hotel.jpg`,
    title: "Hotéis & Pousadas",
    badge: "Check-in Digital e Antecipado",
    description: "Receba hóspedes do mundo todo com check-in digital, reservas instantâneas e confirmação automática.",
    badgeColor: COLORS.color3,
    features: [
      { title: "Check-in digital antecipado", desc: "Validação automática de documentos." },
      { title: "Gestão de reservas integrada", desc: "Booking/Airbnb e lembretes automáticos." },
      { title: "Concierge virtual e chatbot multilíngue", desc: "Com recomendações locais." },
      { title: "Dashboard de ocupação", desc: "Previsão de lotação e gestão de room service." },
      { title: "Pagamentos globais sem dificuldade", desc: "PIX, Stripe, PayPal, Apple/Google Pay." },
      { title: "Avaliações rápidas pós-checkout", desc: "Relatórios automáticos." }
    ]
  },
  {
    image: `${BASE}/images/cafe.jpg`,
    title: "Cafés & Food-Trucks",
    badge: "Pagamentos Online",
    description: "Pedidos e pagamentos pelo celular, cardápio ilustrado e recomendações automáticas em várias línguas.",
    badgeColor: COLORS.color4,
    features: [
      { title: "Menu digital dinâmico via QR Code", desc: "Pedidos do smartphone e status em tempo real." },
      { title: "Pagamento rápido", desc: "PIX, Apple/Google Pay, cartões internacionais." },
      { title: "Promoções por geolocalização", desc: "WhatsApp/push para turistas próximos." },
      { title: "Dashboard de vendas/estoque", desc: "Alertas e insights de horário." },
      { title: "Programa fidelidade digital", desc: "Integrado ao pagamento (mais recompra)." }
    ]
  },
  {
    image: `${BASE}/images/passeio.jpg`,
    title: "Transporte & Passeios",
    badge: "Aplicativo Multilíngue",
    description: "Reservas online, mapas interativos, tour guiado em áudio e agendamento fácil para grupos internacionais.",
    badgeColor: COLORS.color2,
    features: [
      { title: "App multilíngue", desc: "Interface no idioma do turista, acesso fácil." },
      { title: "Pagamentos internacionais", desc: "Stripe, PayPal, PIX, Mercado Pago." },
      { title: "Roteamento inteligente", desc: "Trânsito e zonas especiais da COP30." },
      { title: "Avaliação mútua e botão SOS", desc: "Integrado à polícia/emergência." },
      { title: "Painel administrativo", desc: "Métricas em tempo real." }
    ]
  },
  {
    image: `${BASE}/images/museu.jpg`,
    title: "Cultura & Museus",
    badge: "Gestão Inteligente de Eventos",
    description: "Venda de ingressos online, agenda multilíngue e tour virtual do seu espaço – tudo no celular.",
    badgeColor: COLORS.color5,
    features: [
      { title: "Tour virtual imersivo", desc: "Imagens 360°, óculos VR, guias digitais." },
      { title: "Venda de ingressos/reservas online", desc: "Pagamento internacional." },
      { title: "Exposições digitais interativas", desc: "Acessíveis por QR code no local." },
      { title: "App de realidade aumentada", desc: "Detalhando obras em tempo real." },
      { title: "Gestão de eventos", desc: "Envio automático de lembretes." },
      { title: "Dashboard de fluxo de visitantes", desc: "Receitas e feedback em tempo real." }
    ]
  }
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState(null);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        <div style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
          <img
            src={`${BASE}/images/logocop.svg`}
            alt="COP30 Logo"
            style={{ width: 150, height: "auto", display: "inline-block" }}
          />
        </div>
        <div style={{
          maxWidth: 720,
          margin: "0 auto 1.8rem auto",
          textAlign: "center",
        }}>
          <p style={{
            marginBottom: 6,
            color: "#444",
            fontSize: 17,
            fontWeight: 400,
            lineHeight: 1.3
          }}>
            Soluções digitais para transformar cada segmento do seu negócio na COP30.
          </p>
          <h2 style={{
            color: "#05657d",
            fontSize: 22,
            fontWeight: 700,
            lineHeight: 1.12,
            margin: 0
          }}>
            Descubra como restaurantes, hotéis, cafés, mobilidade e cultura podem crescer exponencialmente e se destacar na Amazônia.
          </h2>
        </div>
        <div className="segment-main">
          <div className="segment-grid">
            {SEGMENTOS.map((seg, idx) => (
              <SegmentCard
                key={seg.title}
                image={seg.image}
                title={seg.title}
                description={seg.description}
                onClick={() => {
                  setSelectedSegment(seg);
                  setModalOpen(true);
                }}
                idx={idx}
              />
            ))}
          </div>
        </div>
        <FeatureModal
          opened={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedSegment?.title}
          features={selectedSegment?.features || []}
        />
      </div>
    </MantineProvider>
  );
}
