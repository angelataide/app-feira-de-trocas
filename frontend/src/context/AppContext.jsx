"use client"

import { createContext, useContext, useReducer } from "react"
import { itensDisponiveis, propostasRecebidas, propostasEnviadas, conversas } from "../constants/mockData"

const AppContext = createContext()

const initialState = {
  user: null,
  itens: itensDisponiveis,
  propostasRecebidas: propostasRecebidas,
  propostasEnviadas: propostasEnviadas,
  conversas: conversas,
  filtros: {
    busca: "",
    categoria: "Todas",
  },
}

function appReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload }

    case "ADD_ITEM":
      return {
        ...state,
        itens: [...state.itens, { ...action.payload, id: Date.now() }],
      }

    case "SET_FILTROS":
      return {
        ...state,
        filtros: { ...state.filtros, ...action.payload },
      }

    case "ADD_PROPOSTA":
      return {
        ...state,
        propostasEnviadas: [...state.propostasEnviadas, action.payload],
      }

    case "UPDATE_PROPOSTA_STATUS":
      return {
        ...state,
        propostasRecebidas: state.propostasRecebidas.map((proposta) =>
          proposta.id === action.payload.id ? { ...proposta, status: action.payload.status } : proposta,
        ),
      }

    case "ADD_MENSAGEM":
      return {
        ...state,
        conversas: state.conversas.map((conversa) =>
          conversa.id === action.payload.chatId
            ? {
                ...conversa,
                mensagens: [...conversa.mensagens, action.payload.mensagem],
                ultimaAtividade: new Date().toISOString(),
              }
            : conversa,
        ),
      }

    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const value = {
    ...state,
    dispatch,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp deve ser usado dentro de AppProvider")
  }
  return context
}
