const situations = [
  {
    "id": "sit_open_1",
    "department": "Front Desk",
    "title": "Caso Crítico: Huésped Furioso (Role-Play)",
    "description": "Un huésped VIP baja a recepción gritando porque su habitación no fue limpiada y exige hablar con el gerente general inmediatamente. Responde con tus propias palabras (Role-Play Abierto):",
    "isOpenEnded": true,
    "options": [],
    "icon": "MessageSquare"
  },
  {
    "id": "sit_1",
    "department": "Front Desk",
    "title": "Caso de Front Desk #1",
    "description": "Caída del sistema PMS durante el check-out de un grupo.",
    "options": [
      {
        "text": "A) Aplicar procedimiento de contingencia manual (planillas impresas) y volcar los datos al sistema cuando regrese la conexión.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Pedir a los huéspedes que esperen en el lobby indefinidamente hasta que el sistema vuelva.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Dejar ir al grupo sin cobrar consumos extras y asumir la pérdida.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_2",
    "department": "Front Desk",
    "title": "Caso de Front Desk #2",
    "description": "Huésped llega con una reserva confirmada, pero el hotel está en situación de overbooking.",
    "options": [
      {
        "text": "A) Derivarlo a un hotel de igual o mayor categoría cercano, cubriendo los gastos de traslado y diferencia de tarifa.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Ofrecerle dormir en una cama supletoria en una sala de reuniones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cancelar la reserva en el momento indicando que fue un error del sistema. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_3",
    "department": "Front Desk",
    "title": "Caso de Front Desk #3",
    "description": "Queja por ruidos molestos en la habitación contigua a las 3:00 AM.",
    "options": [
      {
        "text": "A) Enviar a seguridad/recepción a solicitar silencio a la habitación ruidosa; si persiste, reubicar al huésped afectado o desalojar al infractor.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Llamar por teléfono a la habitación ruidosa una sola vez y no hacer seguimiento. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Decirle al huésped que se queja que el hotel está lleno y no se puede hacer nada hasta la mañana. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_4",
    "department": "Front Desk",
    "title": "Caso de Front Desk #4",
    "description": "Huésped extranjero no habla español ni inglés, y hay un problema con su tarjeta de crédito.",
    "options": [
      {
        "text": "A) Utilizar un traductor digital en la tablet o teléfono del mostrador para explicar la situación y pedir otra forma de pago.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Repetirle la misma frase en español pero en voz más alta.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cancelar el check-in inmediatamente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_5",
    "department": "Front Desk",
    "title": "Caso de Front Desk #5",
    "description": "Cliente frecuente (Promotor histórico) exige un upgrade gratuito a la Suite, pero está ocupada.",
    "options": [
      {
        "text": "A) Explicar amablemente la ocupación, ofrecerle la mejor habitación disponible en su categoría y enviarle una amenidad de cortesía (vino o postre) para mantener la fidelización.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Decirle que por políticas del hotel ya no se dan upgrades gratuitos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Darle el upgrade a una Suite que está bloqueada por mantenimiento.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_6",
    "department": "Front Desk",
    "title": "Caso de Front Desk #6",
    "description": "Llegada de un huésped 5 horas antes del horario oficial de check-in.",
    "options": [
      {
        "text": "A) Guardar su equipaje, ofrecerle acceso a las áreas comunes (piscina, restaurante) y priorizar la limpieza de su habitación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Cobrarle un día extra completo sin previo aviso.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Negarle la entrada al edificio hasta que sea la hora.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_7",
    "department": "Front Desk",
    "title": "Caso de Front Desk #7",
    "description": "Discrepancia de tarifa: el huésped dice que la OTA le mostraba un precio menor al que figura en el sistema.",
    "options": [
      {
        "text": "A) Solicitar ver el voucher de confirmación de la OTA; si el error es del hotel/OTA, igualar la tarifa y gestionar el reclamo internamente luego.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Obligar al huésped a pagar la tarifa del sistema y decirle que pelee él con la agencia.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cobrarle la tarifa menor pero reducirle los servicios (ej. quitarle el desayuno).",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_8",
    "department": "Front Desk",
    "title": "Caso de Front Desk #8",
    "description": "Detección de un pasaporte vencido al momento de tomar los datos del check-in.",
    "options": [
      {
        "text": "A) Informar al huésped de la situación y solicitar otro documento de identidad válido (DNI, licencia de conducir según la legislación local).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Ignorar el vencimiento y registrarlo igual para ahorrar tiempo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Amenazar al huésped con llamar a migraciones. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_9",
    "department": "Front Desk",
    "title": "Caso de Front Desk #9",
    "description": "Huésped reporta haber perdido su llave magnética y solicita un duplicado.",
    "options": [
      {
        "text": "A) Solicitar una identificación con foto para validar su identidad antes de emitir la nueva llave e invalidar la anterior.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Entregarle la llave nueva inmediatamente con solo preguntar el número de habitación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cobrarle una multa exorbitante antes de darle acceso a sus pertenencias.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_10",
    "department": "F&B",
    "title": "Caso de F&B #10",
    "description": "Se recibe una llamada de amenaza de bomba en el hotel.",
    "options": [
      {
        "text": "A) Mantener la calma, anotar todos los detalles posibles de la llamada, contactar a la policía inmediatamente y activar el protocolo de evacuación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Cortar el teléfono asumiendo que es una broma.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Gritar en el lobby que hay una bomba, generando pánico masivo. Alimentos y Bebidas Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_11",
    "department": "F&B",
    "title": "Caso de F&B #11",
    "description": "Huésped reporta una alergia severa al maní después de que ya se le sirvió el plato.",
    "options": [
      {
        "text": "A) Retirar el plato inmediatamente, consultar con el chef sobre contaminación cruzada, preparar una nueva comida en un área segura e informar al gerente de turno.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Quitar los restos de maní visibles del plato y devolvérselo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Decirle que debió avisar antes y cobrarle el plato completo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_12",
    "department": "F&B",
    "title": "Caso de F&B #12",
    "description": "Demora de 50 minutos en un pedido de Room Service (el estándar es 25).",
    "options": [
      {
        "text": "A) Llamar al huésped para disculparse por el retraso, explicar brevemente el motivo, ofrecer un descuento o cortesía, y entregar el pedido lo antes posible.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Entregar la comida fría sin decir nada y esperar que no se queje. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cancelar el pedido en la cocina para no arruinar las métricas de tiempo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_13",
    "department": "F&B",
    "title": "Caso de F&B #13",
    "description": "Fuego descontrolado en la zona de la parrilla durante la preparación de un asado para un evento del hotel.",
    "options": [
      {
        "text": "A) Utilizar el extintor de clase K (para grasas/aceites) ubicado en la cocina, evacuar al personal cercano y notificar a mantenimiento.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Tirar un balde de agua sobre la grasa hirviendo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Dejar que se apague solo mientras se atiende otra mesa.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_14",
    "department": "F&B",
    "title": "Caso de F&B #14",
    "description": "Quiebre de stock de un vino premium que un cliente VIP acaba de pedir.",
    "options": [
      {
        "text": "A) El sommelier o maître se acerca, se disculpa por la falta de stock y ofrece una alternativa de calidad superior al mismo precio del vino original.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Traer un vino más barato sin avisar, esperando que el cliente no se dé cuenta.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Decirle al cliente \"no hay\" y quedarse esperando que elija otro de la carta. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_15",
    "department": "F&B",
    "title": "Caso de F&B #15",
    "description": "Mesero derrama accidentalmente una copa de vino sobre la camisa del cliente.",
    "options": [
      {
        "text": "A) Disculparse inmediatamente, ofrecer asistencia con paños limpios, cubrir el costo de tintorería/lavandería y ofrecer el almuerzo o cena como cortesía.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Darle servilletas de papel y alejarse rápidamente para evitar el enojo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Echarle la culpa al cliente por haberse movido de su silla.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_16",
    "department": "F&B",
    "title": "Caso de F&B #16",
    "description": "Falta de reposición en el buffet de desayuno en horario pico; los huéspedes hacen fila.",
    "options": [
      {
        "text": "A) Asignar un \"runner\" de la cocina exclusivo para reponer las bandejas críticas (huevos, pan, café) y ofrecer servicio de café a la mesa a los que esperan.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Apagar las luces de una sección del buffet para que los huéspedes crean que ya cerró. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Pedirle a la recepcionista que vaya a cocinar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_17",
    "department": "F&B",
    "title": "Caso de F&B #17",
    "description": "Huésped se niega a firmar la cuenta del bar argumentando que le cobraron bebidas de más.",
    "options": [
      {
        "text": "A) Revisar la comanda con el camarero y el sistema de punto de venta; si hay duda razonable, anular el ítem en disputa para priorizar la satisfacción.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Discutir a los gritos con el huésped en medio del salón.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Descontar el dinero directamente del sueldo del mesero sin investigar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_18",
    "department": "F&B",
    "title": "Caso de F&B #18",
    "description": "Proveedor de pescados y mariscos llega 4 horas tarde, afectando el menú del día.",
    "options": [
      {
        "text": "A) Modificar el \"Plato del Día\" rápidamente con insumos disponibles, reimprimir menús temporales o capacitar a los meseros para informar la nueva sugerencia.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Servir pescado congelado de hace meses que estaba destinado a descarte.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cerrar el restaurante por falta de insumos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_19",
    "department": "F&B",
    "title": "Caso de F&B #19",
    "description": "Vajilla de un banquete sale del lavavajillas industrial con restos de comida.",
    "options": [
      {
        "text": "A) Frenar el servicio, revisar los filtros y la temperatura de la máquina, y lavar manualmente todo el lote afectado antes de sacarlo al salón.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Limpiar los restos con un trapo seco y emplatar igual.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Servir la comida tapando la mancha con una hoja de lechuga.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_20",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #20",
    "description": "Cliente vegano se queja de que la única opción en la carta es una ensalada básica.",
    "options": [
      {
        "text": "A) El chef sale al salón, ofrece preparar un plato especial fuera de carta utilizando vegetales de estación, legumbres y cereales, y se toma nota para actualizar el menú.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Explicarle que es un hotel de asado tradicional y que no se hacen excepciones. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Servirle pasta con manteca diciéndole que es margarina vegetal. Mantenimiento Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_21",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #21",
    "description": "El aire acondicionado de una Suite gotea agua directamente sobre la cama.",
    "options": [
      {
        "text": "A) Bloquear la habitación, trasladar al huésped, secar la zona y destapar el desagüe de la bandeja de condensación del equipo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Poner un balde arriba de la cama y decirle al huésped que duerma del otro lado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Apagar el equipo y dejar al huésped sin climatización.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_22",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #22",
    "description": "Ascensor principal se traba entre pisos con tres huéspedes adentro.",
    "options": [
      {
        "text": "A) Establecer comunicación constante por el intercomunicador para calmarlos, llamar a la empresa de mantenimiento del ascensor y evitar abrir puertas a la fuerza.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Intentar forzar la apertura de las puertas desde el piso superior con una barra de metal.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Ignorar la alarma pensando que es una falla habitual del panel. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_23",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #23",
    "description": "Corte general de luz en la zona y el grupo electrógeno no arranca automáticamente.",
    "options": [
      {
        "text": "A) Iniciar el procedimiento de arranque manual en la sala de máquinas, mientras recepción entrega linternas de emergencia y se contacta al servicio técnico del generador.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Esperar a oscuras a que la compañía eléctrica solucione el problema externo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Abandonar el hotel por falta de seguridad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_24",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #24",
    "description": "Los parámetros químicos de la piscina exterior están desbalanceados (pH muy alto, cloro bajo).",
    "options": [
      {
        "text": "A) Cerrar la piscina temporalmente al público, realizar el tratamiento de choque químico necesario y reabrir solo cuando los testeos den dentro de la norma.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Echar un bidón de cloro mientras los huéspedes están nadando. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Dejar la piscina abierta y esperar a que el turno de la noche lo arregle.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_25",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #25",
    "description": "Fuerte olor a gas reportado cerca de la cocina central.",
    "options": [
      {
        "text": "A) Cerrar inmediatamente la llave de paso principal, ventilar el área, evacuar al personal y llamar a un gasista matriculado / bomberos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Encender un fósforo para tratar de encontrar la fuga. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Prender los extractores eléctricos y seguir cocinando normalmente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_26",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #26",
    "description": "Huésped reporta que el agua de la ducha sale de color marrón.",
    "options": [
      {
        "text": "A) Explicar que puede deberse a la limpieza de tanques o cañerías, hacer correr el agua en un punto bajo del circuito hasta purgar, y ofrecer otra habitación para bañarse.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Decirle al huésped que el agua mineral tiene beneficios para la piel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cortar el agua de toda el ala del hotel sin previo aviso. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_27",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #27",
    "description": "Cerradura electrónica de una habitación se queda sin batería con el huésped afuera.",
    "options": [
      {
        "text": "A) Utilizar el dispositivo programador maestro para abrir la puerta de emergencia y reemplazar las pilas inmediatamente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Romper la cerradura a martillazos para que el huésped pueda entrar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Pedirle al huésped que regrese en 3 horas cuando llegue el técnico especializado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_28",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #28",
    "description": "Filtración grave de agua desde el techo hacia el lobby principal.",
    "options": [
      {
        "text": "A) Aislar la zona con señalización de peligro, desviar a los huéspedes, identificar y cortar la llave de paso del piso superior responsable de la fuga.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Poner toallas en el piso y seguir el check-in esquivando el charco.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cortar el suministro de agua de todo el hotel por el resto del día. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_29",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #29",
    "description": "El sistema de calderas falla en pleno invierno y no hay agua caliente en todo el edificio.",
    "options": [
      {
        "text": "A) Activar el sistema de bypass térmico o caldera de respaldo si existe, informar a gerencia para que comunique a los huéspedes y llamar a urgencias térmicas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Apagar los teléfonos de recepción para no escuchar quejas. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Informar a los huéspedes que deben bañarse con agua helada por su salud.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_30",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #30",
    "description": "Televisores Smart de un piso entero pierden la conexión a la red Wi-Fi.",
    "options": [
      {
        "text": "A) Reiniciar el switch de red o access point correspondiente a ese piso desde el cuarto de rack y verificar la configuración de IP.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Entrar habitación por habitación a reiniciar las pantallas manualmente, molestando a todos los huéspedes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Decirle a los clientes que el Wi-Fi es solo para teléfonos celulares. Housekeeping Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_31",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #31",
    "description": "Mucama encuentra un reloj de alta gama olvidado en una habitación recién desocupada.",
    "options": [
      {
        "text": "A) Activar el protocolo de \"Lost & Found\": embolsar el objeto, registrarlo en la aplicación/sistema detallando habitación, fecha y hora, y entregarlo al supervisor para custodia.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Dejarlo arriba de su carro de limpieza por si el huésped vuelve a buscarlo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Guardarlo en su bolsillo y llevárselo a su casa. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_32",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #32",
    "description": "Faltante crítico de toallas limpias desde la lavandería externa en horario de check-in.",
    "options": [
      {
        "text": "A) Utilizar el stock de reserva de toallas (buffer), priorizar la entrega a las habitaciones VIP y presionar al proveedor para una entrega de urgencia.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Entregar toallas húmedas a los huéspedes argumentando que acaban de llegar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) No poner toallas en las habitaciones y esperar a que el huésped reclame.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_33",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #33",
    "description": "Se descubre fuerte olor a humo de cigarrillo en una habitación estricta de no fumadores.",
    "options": [
      {
        "text": "A) Bloquear la habitación temporalmente, utilizar una máquina de ozono para purificar el aire y notificar a recepción para aplicar la multa por limpieza profunda al huésped saliente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Rociar abundante desodorante de ambientes y asignarla al próximo huésped.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Abrir la ventana y cobrar el recargo sin limpiar los textiles.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_34",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #34",
    "description": "Carro de limpieza es dejado bloqueando parcial o totalmente una salida de emergencia.",
    "options": [
      {
        "text": "A) El supervisor debe removerlo inmediatamente hacia un área segura, re-instruir al personal sobre normas de seguridad y demarcar las zonas permitidas de estacionamiento.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Dejarlo ahí porque \"es solo por cinco minutos\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Empujar el carro por las escaleras para despejar el camino rápido.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_35",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #35",
    "description": "Huésped acusa al personal de Housekeeping de haberle robado dinero en efectivo de la mesa de luz.",
    "options": [
      {
        "text": "A) Iniciar el protocolo de seguridad: auditar la cerradura electrónica para ver quién entró, suspender la limpieza de esa habitación e involucrar a la gerencia y policía local si es necesario.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Despedir inmediatamente a la mucama asignada a ese piso. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Decirle al huésped que debió usar la caja fuerte y que el hotel no se responsabiliza.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_36",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #36",
    "description": "Descubrimiento de chinches de cama (bedbugs) durante el recambio de sábanas.",
    "options": [
      {
        "text": "A) Sellar la habitación, poner la ropa de cama en bolsas hidrosolubles directas a lavado térmico, y contactar a la empresa de control de plagas de inmediato.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Sacudir las sábanas por la ventana y rociar insecticida común.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Dejar la cama tal cual y asignársela a un huésped problemático.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_37",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #37",
    "description": "Mascota de un huésped \"Pet-Friendly\" hizo sus necesidades en la alfombra.",
    "options": [
      {
        "text": "A) Utilizar maquinaria de extracción y químicos enzimáticos para eliminar la mancha y el olor, y cargar el costo extra según la política de mascotas firmada.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Limpiar con un trapo húmedo superficialmente y secar con secador de pelo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Exigirle al huésped que baje a comprar productos de limpieza y lo lave él. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_38",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #38",
    "description": "La inspección de calidad revela pelos en el lavamanos después de que la habitación fue marcada como \"Limpia\".",
    "options": [
      {
        "text": "A) El supervisor reporta el fallo de estándar, hace que el personal repase el baño inmediatamente y lo registra como área de mejora en el tablero de métricas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) El supervisor lo limpia él mismo y no le avisa a nadie. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Se deja el baño sucio porque \"el huésped seguro no lo nota\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_39",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #39",
    "description": "Huésped cuelga el cartel de \"No Molestar\" durante 3 días seguidos.",
    "options": [
      {
        "text": "A) Dejar una nota bajo la puerta ofreciendo el servicio. Al tercer día, por protocolo de seguridad (Wellness Check), gerencia o seguridad debe hacer un contacto verbal o físico.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Entrar de todas formas el cuarto día ignorando el cartel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Ignorar la habitación completamente durante toda la estancia de 15 días.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_40",
    "department": "Gerencia",
    "title": "Caso de Gerencia #40",
    "description": "Desabastecimiento de amenidades (shampoo, jabón) en el cuarto de insumos del piso.",
    "options": [
      {
        "text": "A) Pedir abastecimiento de urgencia a bodega central y mientras tanto hacer cross-stocking (pedir prestado) del carro del piso inferior para no demorar las limpiezas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Dejar las habitaciones sin jabón y reportarlo al final del turno.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Rellenar los frascos vacíos con agua para que parezcan llenos. Gerencia Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_41",
    "department": "Gerencia",
    "title": "Caso de Gerencia #41",
    "description": "El dashboard de satisfacción muestra una caída en el NPS debido a un aumento de puntuaciones 0-6.",
    "options": [
      {
        "text": "A) Analizar el panel filtrando por la categoría \"Detractor\" (0-6) para identificar el departamento con más fallas, cruzar datos con los comentarios y ejecutar un plan correctivo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Manipular el código del dashboard para que las puntuaciones de 6 figuren como \"Pasivos\" y maquillar el indicador. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Ignorar el panel de control porque \"los huéspedes siempre se quejan\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_42",
    "department": "Gerencia",
    "title": "Caso de Gerencia #42",
    "description": "Se detecta una rotación de personal del 40% anual en la recepción.",
    "options": [
      {
        "text": "A) Realizar entrevistas de salida estructuradas, revisar la competitividad salarial del mercado y mejorar los procesos de inducción y clima laboral.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Contratar personal más barato constantemente asumiendo que la rotación es inevitable.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Amenazar a los empleados actuales con que si renuncian no tendrán referencias.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_43",
    "department": "Gerencia",
    "title": "Caso de Gerencia #43",
    "description": "El hotel recibe una inspección sorpresa de sanidad en el restaurante y encuentra irregularidades.",
    "options": [
      {
        "text": "A) Colaborar completamente con el inspector, cerrar las áreas observadas inmediatamente, subsanar las faltas en 24hs y documentar todo para levantar la multa.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Intentar sobornar al inspector municipal.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Esconder la comida vencida en el auto del chef durante la inspección.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_44",
    "department": "Gerencia",
    "title": "Caso de Gerencia #44",
    "description": "Un proveedor crítico de software (PMS) anuncia un aumento de precio del",
    "options": [
      {
        "text": "A) Revisar el contrato de SLA, negociar un aumento escalonado y, en paralelo, cotizar e iniciar demos con dos sistemas alternativos en el mercado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Pagar el aumento sin cuestionar y recortar el presupuesto de mantenimiento.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Dejar de pagar y volver a gestionar todo el hotel en hojas de cálculo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_45",
    "department": "Gerencia",
    "title": "Caso de Gerencia #45",
    "description": "Resistencia severa del personal operativo ante la implementación de una nueva herramienta de digitalización.",
    "options": [
      {
        "text": "A) Identificar líderes positivos dentro del staff, realizar capacitaciones prácticas (hands-on) mostrando cómo el sistema les ahorra tiempo real y ofrecer incentivos por uso correcto.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Enviar un correo electrónico con el manual en PDF y exigir su uso al día siguiente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Despedir al empleado que hizo la primera pregunta sobre cómo usar el sistema.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_46",
    "department": "Gerencia",
    "title": "Caso de Gerencia #46",
    "description": "La competencia directa baja sus tarifas un 25% para robar cuota de mercado en temporada baja.",
    "options": [
      {
        "text": "A) Mantener la tarifa pero agregar valor percibido (paquetes con cena, late check-out), y potenciar campañas de marketing segmentadas a la base de datos de Promotores.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Entrar en una guerra de precios bajando un 30% y destruyendo el RevPAR (Ingreso por Habitación Disponible). Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Difamar al hotel de la competencia en redes sociales con cuentas falsas. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_47",
    "department": "Gerencia",
    "title": "Caso de Gerencia #47",
    "description": "Un video de un huésped quejándose de la limpieza se vuelve viral en TikTok/Instagram.",
    "options": [
      {
        "text": "A) El equipo de RP responde públicamente de forma empática sin pelear, contacta al huésped por privado para ofrecer una resolución, y publica un video sobre los estándares de calidad del hotel.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Denunciar el video por derechos de autor y bloquear a todos los usuarios que comenten.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Responder al video insultando al huésped y llamándolo mentiroso. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_48",
    "department": "Gerencia",
    "title": "Caso de Gerencia #48",
    "description": "Desvío del 18% en el presupuesto de gastos operativos (GOP) por exceso en consumo de energía.",
    "options": [
      {
        "text": "A) Realizar una auditoría energética con mantenimiento para identificar fugas o equipos ineficientes (calderas, bombas) y establecer un cronograma de apagado de áreas sin uso.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Apagar las luces de los pasillos y escaleras de todo el hotel por la noche.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cobrarle un \"impuesto energético\" sorpresa a los huéspedes al salir. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_49",
    "department": "Gerencia",
    "title": "Caso de Gerencia #49",
    "description": "Conflicto sindical inminente con el personal de maestranza por condiciones de descanso.",
    "options": [
      {
        "text": "A) Abrir una mesa de diálogo urgente con los delegados y RRHH para negociar mejoras reales en las áreas de descanso (comedor, vestuarios) dentro del presupuesto disponible.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Contratar rompehuelgas y negar el problema.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Cerrar el hotel temporalmente hasta que el sindicato se canse. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_50",
    "department": "Front Desk",
    "title": "Caso de Front Desk #50",
    "description": "El propietario del hotel exige recuperar la inversión de capital recortando drásticamente la calidad de los amenities.",
    "options": [
      {
        "text": "A) Presentar un análisis de datos mostrando cómo una caída drástica en calidad impactará en el NPS, las reseñas y consecuentemente en la tarifa promedio, proponiendo recortes en áreas no visibles.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "B) Cambiar todos los jabones por versiones diluidas sin decirle a nadie.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Renunciar inmediatamente sin dejar los procesos documentados. Recepción Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_51",
    "department": "Front Desk",
    "title": "Caso de Front Desk #51",
    "description": "Llega un grupo de 15 personas (Walk-ins) sin reserva previa a última hora de la noche.",
    "options": [
      {
        "text": "Evaluar la disponibilidad real, ofrecer un paquete grupal con tarifa dinámica, registrar rápidamente a un líder del grupo y entregar las llaves para agilizar el ingreso.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cargar a cada pasajero individualmente al precio más alto, generando una hora de espera en el mostrador. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirles que es imposible alojarlos sin reserva previa porque el sistema nocturno ya cerró. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_52",
    "department": "Front Desk",
    "title": "Caso de Front Desk #52",
    "description": "Huésped corporativo necesita facturación dividida entre la empresa y sus gastos extras personales.",
    "options": [
      {
        "text": "Configurar el \"routing\" o desvío de cargos en el sistema PMS desde el check- in para que la tarifa vaya a la factura \"A\" de la empresa y los consumos vayan a un folio B personal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Poner todos los cargos en una sola factura y decirle al huésped que lo arregle luego con su contador. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle todo en efectivo y negarse a emitir comprobantes corporativos. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_53",
    "department": "Front Desk",
    "title": "Caso de Front Desk #53",
    "description": "Reclamo de un huésped sobre un objeto de valor no encontrado al retirarse.",
    "options": [
      {
        "text": "Registrar la denuncia en la aplicación de gestión de objetos perdidos y, si se encuentra el artículo, generar el documento legal de entrega en formato PDF para formalizar la devolución con seguridad.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Anotar el objeto en un post-it y prometer llamarlo si alguien lo ve de casualidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Asegurar inmediatamente que el personal de limpieza se lo robó y ofrecer un descuento futuro sin investigar. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_54",
    "department": "Front Desk",
    "title": "Caso de Front Desk #54",
    "description": "Falla en la terminal de pagos (POS) durante el horario pico de salidas.",
    "options": [
      {
        "text": "Enviar links de pago seguros por correo/WhatsApp al instante desde el panel digital del hotel para no demorar al cliente, o anotar los datos de tarjeta manualmente mediante formulario offline seguro (MOTO).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Exigir a los huéspedes que caminen dos cuadras hasta un cajero automático para traer efectivo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejarlos ir gratis por \"cortesía ante la falla técnica\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_55",
    "department": "Front Desk",
    "title": "Caso de Front Desk #55",
    "description": "Familia con reserva para dos personas llega con tres niños pequeños sin declarar.",
    "options": [
      {
        "text": "Explicar amablemente las normativas de capacidad por habitación, ofrecer una actualización a una habitación familiar o agregar camas supletorias aplicando el suplemento correspondiente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cobrar una multa altísima en el momento como \"penalización por ocultamiento\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Obligarlos a dormir todos amontonados en una cama doble sin darles sábanas extras. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_56",
    "department": "Front Desk",
    "title": "Caso de Front Desk #56",
    "description": "Huésped solicita un late check-out hasta las 18:00 hs, pero su habitación está asignada a una nueva llegada.",
    "options": [
      {
        "text": "Denegar el late check-out en esa habitación específica, pero ofrecer guardar el equipaje, dar acceso gratuito al spa/vestuarios para ducharse antes del vuelo, o cobrar medio día en otra habitación de menor categoría.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle que se quede en la habitación y luego hacer esperar 4 horas al nuevo huésped que llega. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Exigirle a los gritos que desaloje la habitación inmediatamente a la hora de salida. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_57",
    "department": "Front Desk",
    "title": "Caso de Front Desk #57",
    "description": "Activación de una falsa alarma de incendio en la madrugada.",
    "options": [
      {
        "text": "Silenciar la alarma tras confirmar visualmente que no hay riesgo, utilizar el sistema de megafonía para calmar a los huéspedes, disculparse por el inconveniente y enviar una nota formal por debajo de las puertas a la mañana siguiente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Apagar la alarma y no dar ninguna explicación a los huéspedes que salieron al pasillo en pijama. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Llamar a los bomberos de todas formas \"por las dudas\" para que inspeccionen a las 4 AM. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_58",
    "department": "Front Desk",
    "title": "Caso de Front Desk #58",
    "description": "Cliente se presenta para el check-in con claros síntomas de ebriedad y actitud violenta.",
    "options": [
      {
        "text": "Intervenir junto a seguridad, mantener un tono calmado, pedirle que tome asiento en un área apartada del lobby e invitarlo a registrarse una vez que la situación esté controlada.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Reírse de él junto a los botones y grabarlo con el teléfono celular. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Empezar a gritarle para imponer autoridad frente a otros pasajeros. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_59",
    "department": "Front Desk",
    "title": "Caso de Front Desk #59",
    "description": "Error de comunicación: un traslado al aeropuerto reservado por el huésped no fue agendado con la empresa tercerizada.",
    "options": [
      {
        "text": "Asumir el error, pedir un taxi premium o servicio de remís ejecutivo inmediatamente, y el hotel debe absorber el costo total del viaje para evitar que pierda el vuelo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al huésped que llame él mismo a un Uber porque el proveedor falló. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirle que la recepcionista del turno anterior tuvo la culpa y no se puede hacer nada. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_60",
    "department": "F&B",
    "title": "Caso de F&B #60",
    "description": "Un pasajero sufre un desmayo en el medio del lobby.",
    "options": [
      {
        "text": "Activar el protocolo médico de emergencia: despejar el área, llamar al servicio de área protegida o ambulancia, y asistir con personal capacitado en primeros auxilios sin mover al paciente de forma insegura.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Arrastrarlo detrás del mostrador para que no \"afeé\" la imagen del lobby. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ignorarlo creyendo que está durmiendo. Alimentos y Bebidas Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_61",
    "department": "F&B",
    "title": "Caso de F&B #61",
    "description": "Queja de un comensal porque el corte de asado tradicional argentino llegó frío y fuera de su punto de cocción solicitado.",
    "options": [
      {
        "text": "Retirar la tabla inmediatamente, disculparse sin poner excusas, solicitar a la parrilla un nuevo corte con prioridad máxima y ofrecer una ronda de bebidas sin cargo mientras espera.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Llevar el mismo corte a la cocina y recalentarlo en el microondas durante dos minutos. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Discutir con el cliente diciéndole que \"ese es el punto real del asado\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_62",
    "department": "F&B",
    "title": "Caso de F&B #62",
    "description": "Faltan termos y yerba para el servicio de mate en el buffet de desayuno, generando enojo en turistas locales.",
    "options": [
      {
        "text": "El capitán de salón debe reponer inmediatamente el stock desde la despensa secundaria, preparar kits individuales provisorios en la barra y reordenar la logística de compras con el economato.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ofrecerles té en saquitos diciendo que \"es prácticamente lo mismo\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Esconder las pavas eléctricas para que los huéspedes desistan de pedir mate. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_63",
    "department": "F&B",
    "title": "Caso de F&B #63",
    "description": "Un evento corporativo pide extender el servicio de barra libre por dos horas no pactadas en el contrato original.",
    "options": [
      {
        "text": "El gerente de banquetes aprueba la extensión, firma un anexo rápido de cobro extra con el responsable del evento, e informa al personal de caja y mozos para prolongar el turno.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Seguir sirviendo gratis por miedo a quedar mal con la empresa. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Apagar las luces del salón y retirar las bebidas repentinamente al cumplirse la hora. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_64",
    "department": "F&B",
    "title": "Caso de F&B #64",
    "description": "Máquina de café expreso sufre una avería crítica en pleno horario de desayuno.",
    "options": [
      {
        "text": "Desviar la atención montando rápidamente termos con café de filtro de excelente calidad, ofrecer disculpas mesa por mesa y derivar al servicio técnico para su reparación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar la fila de gente esperando hasta que la máquina vuelva a encender \"por arte de magia\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Servir café instantáneo diluido sin decir nada. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_65",
    "department": "F&B",
    "title": "Caso de F&B #65",
    "description": "Disputa a gritos entre el Chef Ejecutivo y el Maître frente a las puertas batientes del salón.",
    "options": [
      {
        "text": "Gerencia de A&B o de turno debe intervenir inmediatamente, derivar la discusión a una oficina cerrada lejos del oído de los comensales y solucionar el cuello de botella del servicio.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "El resto del personal toma partido y apoya a su líder favorito en medio del pasillo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pedirle a los clientes que ignoren el ruido de la cocina. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_66",
    "department": "F&B",
    "title": "Caso de F&B #66",
    "description": "Contaminación cruzada confirmada: un plato para celíacos se preparó en la misma tabla que un panificado regular.",
    "options": [
      {
        "text": "Frenar el envío del plato al salón al instante, descartarlo por completo, higienizar las herramientas, cocinar una nueva porción e informar al cliente la ligera demora por protocolos de salud.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Soplar las migas de pan y enviar el plato esperando que no haya reacción alérgica. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Servir el plato de todas formas y ocultar el error al chef y al comensal. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_67",
    "department": "F&B",
    "title": "Caso de F&B #67",
    "description": "Huésped es sorprendido guardando comida del buffet en tuppers dentro de su mochila.",
    "options": [
      {
        "text": "Acercarse con discreción, informarle cordialmente que las normativas del hotel no permiten retirar alimentos del salón por seguridad bromatológica, pero ofrecer empacarle una fruta o sándwich si tiene un viaje largo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Quitarle la mochila por la fuerza y vaciar el contenido en la basura. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle silenciosamente \"10 desayunos extra\" a su cuenta final. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_68",
    "department": "F&B",
    "title": "Caso de F&B #68",
    "description": "Aparece un insecto en la ensalada de un cliente VIP.",
    "options": [
      {
        "text": "Retirar el plato inmediatamente con profunda disculpa, informar al gerente del salón, cubrir el costo íntegro de su comida, ofrecer un postre o licor de cortesía e investigar en la bacha la limpieza de vegetales.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle que \"son cosas del campo\" porque los vegetales son orgánicos. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Quitar el insecto con la mano delante del cliente y devolverle la misma ensalada. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_69",
    "department": "F&B",
    "title": "Caso de F&B #69",
    "description": "Cliente ebrio empieza a acosar a otros comensales en el bar del hotel.",
    "options": [
      {
        "text": "El bartender interrumpe el servicio de alcohol (cut-off), notifica a seguridad para que aborde al cliente con tacto, y se le ofrece acompañarlo a su habitación o pedirle un transporte si no es huésped.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Seguir vendiéndole alcohol para aumentar el ticket promedio de la noche. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Desafiar al cliente a pelear fuera del bar. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_70",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #70",
    "description": "El camión recolector de aceite usado de cocina no pasó, generando un rebalse en el sector de residuos húmedos.",
    "options": [
      {
        "text": "Sellar el aceite en bidones plásticos de seguridad temporalmente en el área de acopio, solicitar un servicio de emergencia a la empresa recicladora y desinfectar el área afectada para evitar plagas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirar los litros de aceite vegetal usado directo al desagüe cloacal. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar los tambores abiertos en el callejón trasero generando olores al vecindario. Mantenimiento Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_71",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #71",
    "description": "Rotura de un caño principal de agua justo arriba de la sala de servidores de la propiedad.",
    "options": [
      {
        "text": "Cortar el agua de esa sección instantáneamente, colocar cubiertas impermeables sobre los racks, notificar a IT para el apagado seguro de servidores y bombear el agua residual del piso.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Poner toallas en el piso y esperar que los equipos de TI no se mojen. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cortar la luz general del hotel y dejarlo a oscuras todo el día para evitar cortocircuitos. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_72",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #72",
    "description": "Falla crítica en el sistema de extracción de humo en la cocina, llenando el restaurante de olor a comida.",
    "options": [
      {
        "text": "Evacuar el humo mediante ventilación forzada cruzada (ventanas/puertas), apagar temporalmente las parrillas/planchas, y reparar los motores de las campanas extractoras en el techo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Esparcir desodorante de lavanda en aerosol en pleno salón comedor. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Obligar a los clientes a comer entre el humo asumiendo que es \"ambiente de taberna\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_73",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #73",
    "description": "El secador de pelo integrado en la pared del baño tira chispas al encenderse.",
    "options": [
      {
        "text": "Desconectar el disyuntor de la habitación, remover el secador defectuoso, instalar uno de repuesto testeado y registrar el incidente para revisar el lote de aparatos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ponerle cinta aisladora al cable y decirle al huésped que lo use con cuidado. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Reírse de la situación y culpar al pasajero por tener las manos húmedas. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_74",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #74",
    "description": "Fuerte ruido y vibración proveniente del motor de la cámara frigorífica principal.",
    "options": [
      {
        "text": "Trasladar los perecederos más delicados a cámaras secundarias, apagar el motor preventivamente para evitar fundición y convocar al técnico frigorista del servicio oficial.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Darle golpes al motor con una llave inglesa hasta que deje de sonar. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ignorar el ruido hasta que el motor se queme por completo y perder toda la mercadería. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_75",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #75",
    "description": "Falla en la puerta giratoria del acceso principal: se quedó atascada.",
    "options": [
      {
        "text": "Abrir y asegurar de inmediato las puertas batientes laterales de emergencia para permitir el flujo, aislar la puerta giratoria, e iniciar el destrabe de los sensores ópticos y guías mecánicas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Poner un cartel de \"Cerrado\" y mandar a los huéspedes a entrar por la puerta de descarga de proveedores. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Intentar empujar los cristales por la fuerza con varios empleados, arriesgando su rotura. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_76",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #76",
    "description": "Se reporta una invasión de hormigas y pequeños insectos en el solárium de la piscina.",
    "options": [
      {
        "text": "Coordinar con el control de plagas un rociado de cebo ecológico nocturno inofensivo para huéspedes, podar la vegetación que invade los camastros y limpiar restos de bebidas dulces.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Echar veneno tóxico industrial en spray a las 14:00 hs con huéspedes tomando sol al lado. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirles a los huéspedes que es normal porque el hotel es ecológico. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_77",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #77",
    "description": "La cinta de correr principal del gimnasio frena bruscamente mientras un huésped la usa.",
    "options": [
      {
        "text": "Asistir al huésped primero asegurándose de que no está lesionado, desenchufar la cinta, colocarle el cartel de \"Fuera de Servicio\", y ajustar la tensión de las poleas del motor o actualizar su placa.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejarla encendida para que el siguiente huésped se caiga también. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar al huésped de \"pesar demasiado\" para el equipo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_78",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #78",
    "description": "Atasco severo en el ducto vertical de basura (Shut de basura) bloqueando todos los pisos.",
    "options": [
      {
        "text": "Sellar las compuertas de cada piso para evitar olores y plagas, utilizar cañas o pesas de destranque desde el piso superior, e instruir al personal de housekeeping sobre el tamaño máximo de las bolsas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Empujar la basura con una escoba vieja y dejarla atascada a la mitad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Prender fuego adentro del ducto para \"reducir el volumen de los residuos\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_79",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #79",
    "description": "Pantallas de los termostatos táctiles de las habitaciones se descalibran y no marcan la temperatura real.",
    "options": [
      {
        "text": "Realizar una calibración del firmware piso por piso junto con IT, reseteando los módulos de pared y contrastando la salida de aire real con termómetros infrarrojos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cambiar el termostato completo en cada cuarto generando un costo altísimo de refacciones. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Explicar a los pasajeros que resten 5 grados mentalmente a lo que dice la pantalla. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_80",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #80",
    "description": "Las luces subacuáticas de la piscina exterior presentan agua dentro del armazón.",
    "options": [
      {
        "text": "Cortar la alimentación eléctrica del circuito de piscina inmediatamente desde el tablero por riesgo de electrocución, vaciar parcialmente el agua de ser necesario, y re-sellar los faros con silicona náutica y cambiar orings.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar el circuito eléctrico prendido porque se ve \"lindo de noche\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Tapar las luces rotas con cinta adhesiva sumergible. Housekeeping Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_81",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #81",
    "description": "Un huésped se retira, y su perro mascota destruyó las patas del sillón de la habitación.",
    "options": [
      {
        "text": "Fotografiar los daños antes de la limpieza, documentarlo en el sistema, facturar al huésped el costo de reparación/reemplazo estipulado en la política \"pet-friendly\" que firmó y mandar a restaurar el mueble.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Darle vuelta al sillón para que el próximo huésped no vea el daño. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Amenazar públicamente al huésped en las redes sociales del hotel. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_82",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #82",
    "description": "Una mucama sufre un tirón lumbar severo al intentar voltear un colchón King Size sola.",
    "options": [
      {
        "text": "Asistir médicamente al personal al instante mediante ART, reemplazar su turno con guardia, y re-capacitar a todo el equipo en ergonomía dictaminando que los colchones pesados se voltean de a dos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Darle un analgésico y obligarla a terminar su cuota de 15 habitaciones del día. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Despedirla por inutilizar temporalmente el servicio. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_83",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #83",
    "description": "Habitación es reportada como \"Limpia y Vacante\" en el sistema, pero el huésped entra y la cama está deshecha.",
    "options": [
      {
        "text": "Disculparse profundamente con el cliente, reasignarle de inmediato una habitación lista (con upgrade de ser posible), e investigar el error de status entre la gobernanta y el sistema PMS.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pedirle al huésped que espere parado en el pasillo mientras la mucama limpia rápido en 10 minutos. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirle al huésped que él mismo la ensució recién al entrar. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_84",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #84",
    "description": "Extravío de un manojo de llaves maestras físicas por parte de un supervisor.",
    "options": [
      {
        "text": "Reportar el extravío de inmediato a la dirección y seguridad; si no aparecen tras una búsqueda de 1 hora, proceder a recodificar todas las cerraduras afectadas (o re-cilindrar si son mecánicas) por seguridad de los huéspedes.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "No decirle a nadie para evitar sanciones. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar falsamente a un pasante del área de mantenimiento. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_85",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #85",
    "description": "Un huésped encuentra ropa íntima de otra persona olvidada en el cajón de la cómoda.",
    "options": [
      {
        "text": "Enviar a la supervisora personalmente a retirar el artículo, pedir disculpas por el fallo en el procedimiento de \"revisión de cajones\", ofrecer una atención en el cuarto (vino/chocolates) y re-limpiar toda la unidad.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mandar a un maletero a buscar la prenda sin emitir ninguna disculpa. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Negar que sea de un huésped anterior e insinuar que el cliente tiene problemas de memoria. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_86",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #86",
    "description": "Rotura del montacargas exclusivo de lavandería, estancando todos los carros de ropa sucia.",
    "options": [
      {
        "text": "Establecer horarios especiales (fuera del flujo de pasajeros) para utilizar un ascensor de servicio secundario, cubriendo los carros debidamente para mantener la estética y salubridad del traslado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar las sábanas sucias apiladas en los pasillos frente a las habitaciones todo el día. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Hacer que las mucamas bajen bolsas de ropa sucia por el ascensor principal lleno de huéspedes. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_87",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #87",
    "description": "Mezcla occidental de químicos de limpieza (Lavandina + Amoníaco) en el Office del piso, generando vapores tóxicos.",
    "options": [
      {
        "text": "Evacuar el sector inmediatamente, abrir ventanas para ventilar el área, llamar a seguridad/bomberos si alguien inhaló los vapores, y suspender a quien haya violado las normas de etiquetado y capacitación en químicos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Entrar corriendo al cuarto aguantando la respiración para intentar secarlo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ordenarle a la mucama más nueva que limpie el derrame sin protección respiratoria. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_88",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #88",
    "description": "Derrame profundo de vino tinto en una alfombra persa en el pasillo del piso presidencial.",
    "options": [
      {
        "text": "Intervenir inmediatamente para absorber la mancha sin frotar, utilizar inyección y extracción en frío con químicos específicos para textiles delicados, evitando la fijación del tanino.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Frotar agresivamente la mancha con lavandina, destiñendo la alfombra por completo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Mover un gran mueble pesado de la pared para tapar la mancha permanentemente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_89",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #89",
    "description": "Un huésped importante acusa a Housekeeping de haber tirado documentos (sin triturar) que dejó encima del escritorio.",
    "options": [
      {
        "text": "Entrevistar a la mucama, buscar en la basura de acopio antes de la recolección final por si hubo un error, y recordar la política estricta de \"solo tirar lo que está adentro de la papelera\".",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Acusar al huésped de ser desordenado con sus papeles. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Sacar la basura a la calle y decirle que ya es problema del recolector municipal. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_90",
    "department": "Gerencia",
    "title": "Caso de Gerencia #90",
    "description": "Falta de personal nocturno para realizar el Turndown Service (servicio de apertura de cama) en la zona VIP.",
    "options": [
      {
        "text": "Reorganizar prioridades: el personal disponible o incluso supervisión realiza el servicio exprés enfocado en las suites de máxima jerarquía (cerrar cortinas, encender luces tenues, chocolate en almohada).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ignorar el procedimiento y no hacerlo en ninguna habitación. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Llamar a recepción para que los recepcionistas de guardia vayan a abrir las camas. Gerencia Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_91",
    "department": "Gerencia",
    "title": "Caso de Gerencia #91",
    "description": "El tablero central muestra que no se calculan bien las categorías del NPS; algunos detractores figuran como pasivos.",
    "options": [
      {
        "text": "Configurar y auditar la lógica del código del dashboard para asegurar la regla estricta: las calificaciones de 9 y 10 entran automáticamente como \"Promotores\", 7 y 8 como \"Pasivos\", y 0 a 6 como \"Detractores\".",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Modificar las encuestas de papel para evitar usar el dashboard porque el sistema \"es muy complejo\". Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Borrar los datos de los detractores para subir el promedio general artificialmente y reportar éxito a la junta. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_92",
    "department": "Gerencia",
    "title": "Caso de Gerencia #92",
    "description": "Discrepancia del 15% entre el inventario contable y las botellas reales en la bodega general.",
    "options": [
      {
        "text": "Realizar arqueos sorpresa mensuales, cruzar el reporte de ventas del TPV (POS) con las bajas de economato, instalar cámaras de seguridad enfocadas y establecer responsables únicos con llave de la bodega.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Descontar la diferencia salarial a todos los camareros del hotel como sanción grupal sin pruebas de robo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Maquillar los balances en Excel para que cierre el número contable. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_93",
    "department": "Gerencia",
    "title": "Caso de Gerencia #93",
    "description": "Ausentismo masivo del personal operativo debido a un paro general de transporte urbano.",
    "options": [
      {
        "text": "Activar el plan de contingencia pre-aprobado: contratar combis privadas (shuttles) para buscar al personal esencial, ofrecer pago extra u horas compensatorias, y los gerentes asisten en tareas operativas básicas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Suspender sin goce de sueldo a todos los que no pudieron llegar a trabajar. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cerrar todos los servicios de alimentos y limpieza, dejando a los huéspedes a la deriva. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_94",
    "department": "Gerencia",
    "title": "Caso de Gerencia #94",
    "description": "Demanda laboral de un exempleado por presuntas horas extras no registradas ni pagadas.",
    "options": [
      {
        "text": "Entregar todo el registro biométrico de reloj fichador al departamento legal, conciliar las marcaciones reales, y si hubo error administrativo, proponer un acuerdo de liquidación justa evitando el juicio.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ignorar la notificación legal hasta que llegue el embargo de las cuentas del hotel. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Falsificar planillas de horarios pasadas para intentar ganar el juicio. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_95",
    "department": "Gerencia",
    "title": "Caso de Gerencia #95",
    "description": "Caída drástica del RevPAR de una propiedad del grupo frente al presupuesto del primer trimestre.",
    "options": [
      {
        "text": "El Revenue Manager y Director de Ventas deben analizar la penetración de mercado (STR Report), revisar si la pérdida fue por ocupación o tarifa, y reestructurar la estrategia comercial de canales B2B y OTA's de inmediato.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Bajar drásticamente el sueldo de todo el personal como medida de choque. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Gastar el triple en pauta publicitaria en Facebook sin cambiar la estrategia de precios de fondo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_96",
    "department": "Gerencia",
    "title": "Caso de Gerencia #96",
    "description": "Auditoría IT revela que la red WiFi de huéspedes tiene vulnerabilidades graves expuestas a hackers.",
    "options": [
      {
        "text": "Contratar a un experto en ciberseguridad, segmentar la red en VLANs separando operaciones de huéspedes, aislar los servidores PMS y bloquear puertos P2P no autorizados.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ignorar el reporte porque \"hasta ahora nadie nos ha hackeado\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Apagar el WiFi del hotel de forma permanente por miedo a robos de datos. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_97",
    "department": "Gerencia",
    "title": "Caso de Gerencia #97",
    "description": "Una nueva app interna falla en la adopción porque los jefes de área la encuentran poco intuitiva y prefieren el papel.",
    "options": [
      {
        "text": "Recopilar el feedback (UI/UX) de los usuarios reales, simplificar la interfaz de los módulos más criticados, y hacer demostraciones personalizadas lideradas por la gerencia.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cancelar el proyecto de desarrollo tecnológico, asumiendo la pérdida monetaria total. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Sancionar duramente con advertencias formales al jefe de área que siga utilizando planillas de papel. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_98",
    "department": "Gerencia",
    "title": "Caso de Gerencia #98",
    "description": "Propietarios exigen congelar todas las contrataciones (Freeze hiring) para mejorar el EBITDA, asfixiando la operación en temporada alta.",
    "options": [
      {
        "text": "Elaborar un informe financiero que demuestre que el pago de horas extras excesivas y la caída potencial en retención de clientes saldrá más caro que cubrir tres vacantes críticas operativas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ocultar las vacantes, haciendo que el personal actual trabaje 14 horas al día sin pago extra hasta que colapsen. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Bajar la categoría de las habitaciones (limpiar una vez cada dos días) sin informarle a los huéspedes ni ajustar la tarifa. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_99",
    "department": "Gerencia",
    "title": "Caso de Gerencia #99",
    "description": "Fuerte caída en el ranking de TripAdvisor tras un mes de reviews de 2 estrellas enfocadas en fallas de servicio.",
    "options": [
      {
        "text": "Implementar un comité de crisis de calidad: contactar a los autores para recuperar la confianza, atacar el problema raíz (ej. demoras del restaurante), y fomentar proactivamente reviews positivas in-house.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Comprar paquetes de reseñas falsas de 5 estrellas en internet mediante cuentas bot. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Eliminar el perfil del hotel de la plataforma para no mostrar los malos comentarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_100",
    "department": "Front Desk",
    "title": "Caso de Front Desk #100",
    "description": "Disconformidad gerencial corporativa porque no se enviaron a tiempo los PDF de actas legales de entrega de objetos en el último contingente.",
    "options": [
      {
        "text": "Revisar el flujo del proceso (workflow) en el sistema Lost & Found para automatizar el envío de los PDFs al momento del check-out de contingentes, y establecer alertas si el archivo queda pendiente de envío.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al corporativo que el papel físico se perdió en el correo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Modificar la fecha de los archivos pasados para encubrir la demora operativa. Recepción Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_101",
    "department": "Front Desk",
    "title": "Caso de Front Desk #101",
    "description": "Huésped afirma haber pagado su estadía por adelantado en una agencia fantasma, pero el PMS muestra saldo pendiente.",
    "options": [
      {
        "text": "Explicar la situación con empatía, solicitar el comprobante de pago para investigar el fraude, retener temporalmente el monto en la tarjeta de crédito del huésped como garantía y ofrecer asistencia para contactar a la agencia.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Exigirle el pago en efectivo al instante tratándolo de estafador. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle a la fuerza reteniendo su equipaje hasta que pague. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_102",
    "department": "Front Desk",
    "title": "Caso de Front Desk #102",
    "description": "El sistema duplica por error una reserva y el auditor nocturno cobra un \"No- Show\" a la tarjeta del cliente.",
    "options": [
      {
        "text": "Al detectar el error o recibir el reclamo, gestionar el extorno (reembolso) inmediato en la pasarela de pagos, enviar un correo formal de disculpas con el comprobante de anulación y ofrecer un beneficio en su próxima estadía.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al huésped que el trámite demora 60 días y desentenderse. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Negar el doble cobro y decirle al cliente que es problema de su banco. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_103",
    "department": "Front Desk",
    "title": "Caso de Front Desk #103",
    "description": "Llegada de un menor de edad no acompañado intentando hacer check-in con la tarjeta de crédito de sus padres.",
    "options": [
      {
        "text": "Aplicar la ley local: denegar el acceso a la habitación, resguardar al menor en el lobby y contactar a los padres/tutores para que se presenten físicamente o gestionen una autorización notarial válida urgente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejarlo ingresar pero bloquearle los consumos extra. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle en efectivo y darle la habitación ignorando las normativas de minoridad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_104",
    "department": "Front Desk",
    "title": "Caso de Front Desk #104",
    "description": "Maletero daña accidentalmente una maleta rígida de lujo al subirla al carro portaequipajes.",
    "options": [
      {
        "text": "Informar al huésped de inmediato con total honestidad, documentar el daño con fotografías y derivar el caso a gerencia para aplicar el seguro de responsabilidad civil o reponer el artículo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Esconder el rasguño poniendo una pegatina del hotel encima. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar la maleta en la habitación y salir corriendo para que el huésped crea que ya estaba rota. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_105",
    "department": "Front Desk",
    "title": "Caso de Front Desk #105",
    "description": "Huésped olvida su equipaje de mano en el lobby y desaparece durante horas.",
    "options": [
      {
        "text": "Activar el protocolo de objetos desatendidos: seguridad inspecciona el bulto, recepción verifica las cámaras para identificar al dueño, y se retira a una sala segura (Lost & Found) hasta su reclamo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar la mochila en medio del paso para que el huésped la encuentre donde la dejó. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Abrir la mochila frente a todos los recepcionistas para revisar qué hay adentro. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_106",
    "department": "Front Desk",
    "title": "Caso de Front Desk #106",
    "description": "El conserje da indicaciones erróneas y un turista pierde un tour costoso que no es reembolsable.",
    "options": [
      {
        "text": "Asumir el error de comunicación, contactar al operador turístico para intentar reprogramar sin costo, y si no es posible, el hotel asume la compensación o paga un transporte privado para que alcancen al grupo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al huésped que debió usar Google Maps y no confiar en el personal. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Esconder al conserje en la trastienda para que el huésped no lo encuentre para reclamarle. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_107",
    "department": "Front Desk",
    "title": "Caso de Front Desk #107",
    "description": "Pasajero intenta pagar el saldo de su cuenta con billetes extranjeros visiblemente rotos, manchados o sellados.",
    "options": [
      {
        "text": "Informar cortésmente que las políticas bancarias locales o casas de cambio no aceptan billetes deteriorados, utilizar el detector de billetes falsos, y solicitar otra forma de pago u otros billetes en buen estado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Aceptarlos para no discutir e intentar pasarlos disimuladamente a otro huésped como vuelto. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Romper el billete por completo frente al pasajero diciendo que no sirve. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_108",
    "department": "Front Desk",
    "title": "Caso de Front Desk #108",
    "description": "Llega un paquete de paquetería urgente para un huésped que hizo check-out el día anterior.",
    "options": [
      {
        "text": "Recibir el paquete, registrarlo en el sistema, contactar al huésped por teléfono/email para avisarle, y coordinar el reenvío a su domicilio a cobro revertido o guardarlo hasta que un conocido pase a buscarlo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Rechazar el paquete y decirle al cartero que no conocen a esa persona. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Abrir la caja y repartir el contenido entre el personal del turno. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_109",
    "department": "Front Desk",
    "title": "Caso de Front Desk #109",
    "description": "Corte de energía interrumpe específicamente la terminal codificadora de llaves magnéticas (Keycard Encoder).",
    "options": [
      {
        "text": "Usar llaves físicas maestras de contingencia (o el celular con tecnología NFC si el hotel lo posee) para acompañar a los huéspedes a abrir sus puertas, mientras TI o mantenimiento reconfiguran el codificador en otra PC.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pedirles a los huéspedes que dejen sus puertas abiertas todo el día. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Mandar a los clientes al bar a esperar indefinidamente hasta que vuelva la luz. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_110",
    "department": "F&B",
    "title": "Caso de F&B #110",
    "description": "VIP exige ingresar a su habitación a las 8:00 AM, pero el sistema PMS ya ejecutó la auditoría nocturna.",
    "options": [
      {
        "text": "Generar una pre-asignación manual, cargar el \"Early Check-in\" con el código correspondiente en el folio del día nuevo, y entregar la llave priorizando su descanso.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle que el sistema está bloqueado y debe esperar a las 14:00. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Reiniciar el servidor en medio de la auditoría para forzar el ingreso, corrompiendo la base de datos. Alimentos y Bebidas Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_111",
    "department": "F&B",
    "title": "Caso de F&B #111",
    "description": "Proveedor de carnes entrega el pedido sin la planilla de registro de temperatura y con pérdida de la cadena de frío.",
    "options": [
      {
        "text": "Rechazar la mercadería inmediatamente por riesgo bromatológico, documentar la negativa en el remito, contactar al proveedor para un envío de reemplazo urgente y notificar a la gerencia de compras.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Recibir la carne y meterla rápido al freezer para que \"se enfríe de nuevo\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Usar esa carne para la comida del personal y evitar la queja de los huéspedes. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_112",
    "department": "F&B",
    "title": "Caso de F&B #112",
    "description": "Mesa de 10 personas exige dividir la cuenta ítem por ítem en pleno pico de servicio nocturno.",
    "options": [
      {
        "text": "El camarero solicita paciencia amablemente, se retira al TPV (POS) y utiliza la función de \"Split Bill\" para desglosar la comanda exacta, agilizando el cobro con múltiples terminales si es posible.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Llevar la calculadora a la mesa y hacer que los clientes saquen la cuenta ellos mismos. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Negarse rotundamente alegando que \"el sistema no lo permite\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_113",
    "department": "F&B",
    "title": "Caso de F&B #113",
    "description": "El barril de cerveza artesanal se queda vacío a mitad de servir una pinta, y el de repuesto no está frío.",
    "options": [
      {
        "text": "Descartar esa pinta, pedir disculpas al cliente, ofrecerle otra marca de cerveza en botella o un cóctel al mismo precio, y conectar el barril nuevo para que tome frío para el próximo turno.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Servir la mitad de la pinta fría y completarla con la caliente del barril nuevo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle media pinta sin preguntarle. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_114",
    "department": "F&B",
    "title": "Caso de F&B #114",
    "description": "Cliente reclama que su cóctel está \"aguado\" y exige la devolución de su dinero.",
    "options": [
      {
        "text": "El bartender se disculpa, retira la bebida sin cuestionar, prepara uno nuevo asegurando las medidas correctas (jigger) frente al cliente o le ofrece cambiarlo por otra opción del menú sin cargo extra.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Probar el trago con un sorbete frente a él para demostrarle que está fuerte. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Discutir argumentando que la receta es así y el cliente no sabe de coctelería. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_115",
    "department": "F&B",
    "title": "Caso de F&B #115",
    "description": "La impresora de comandas de la cocina se queda sin papel y se pierden tres pedidos.",
    "options": [
      {
        "text": "El \"expediter\" o camarero líder nota la demora, verifica verbalmente con el chef las mesas faltantes, reimprime las comandas desde el salón, prioriza su cocción y ofrece un aperitivo a las mesas afectadas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Esperar que los clientes se quejen por la demora para recién ir a preguntar a la cocina. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar al comensal por pedir platos muy difíciles. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_116",
    "department": "F&B",
    "title": "Caso de F&B #116",
    "description": "Camarero agrega un 15% de propina al cobro con tarjeta sin la autorización explícita del cliente.",
    "options": [
      {
        "text": "El Maître debe anular la transacción inmediatamente, cobrar el importe exacto del ticket, pedir disculpas al huésped explicando que fue un error de tipeo, y sancionar al camarero por mala praxis financiera.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al cliente que la propina es obligatoria por ley y no anular el cargo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Devolverle el dinero en efectivo desde el bolsillo del camarero frente a todos. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_117",
    "department": "F&B",
    "title": "Caso de F&B #117",
    "description": "Un niño tropieza y rompe un vaso de vidrio cerca de las bandejas del buffet.",
    "options": [
      {
        "text": "Frenar el servicio en esa zona, verificar que el niño esté bien, retirar toda la comida abierta cercana por riesgo de esquirlas de vidrio, barrer y aspirar exhaustivamente, y reponer alimentos nuevos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Barrer los vidrios grandes y dejar las bandejas de comida tal como estaban. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle el vaso a los padres y reprender al niño a los gritos. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_118",
    "department": "F&B",
    "title": "Caso de F&B #118",
    "description": "El inspector de sanidad municipal exige ver las planillas de temperaturas de las cámaras frigoríficas, y no están completas.",
    "options": [
      {
        "text": "Asumir la falta administrativa ante el inspector, recibir el acta de apercibimiento, y el Chef Ejecutivo debe implementar esa misma tarde un control estricto cruzado entre turnos para regularizar la métrica.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Completar las planillas con datos inventados mientras el inspector mira hacia otro lado. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ofrecerle una cena gratis al inspector para que olvide el asunto. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_119",
    "department": "F&B",
    "title": "Caso de F&B #119",
    "description": "Un \"influencer\" gastronómico llega sin reserva exigiendo cenar gratis a cambio de una publicación.",
    "options": [
      {
        "text": "El gerente o RR.PP le agradece el interés, explica que las colaboraciones se coordinan previamente por email con el departamento de marketing, pero le ofrece una mesa normal si desea abonar la cena.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Darle la mejor mesa gratis por miedo a que hable mal en redes sociales. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Echarlo del restaurante llamándolo \"vividor\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_120",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #120",
    "description": "Pedido de Room Service se entrega en una habitación equivocada y el huésped erróneo empieza a consumirlo.",
    "options": [
      {
        "text": "Dejar que el huésped erróneo se quede con el pedido sin cargo (cortesía por el error), marchar un pedido idéntico urgente para la habitación correcta y despacharlo personalmente con las disculpas del caso.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Quitarle el plato de las manos al huésped erróneo y llevárselo al correcto. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle a ambos la misma comida para compensar la pérdida. Mantenimiento Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_121",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #121",
    "description": "La bomba principal de agua pierde presión, dejando las duchas de los últimos pisos sin fuerza.",
    "options": [
      {
        "text": "Activar las bombas jockey/de respaldo del sistema presurizador, verificar válvulas de retención y limpieza de filtros, y enviar una alerta a recepción para que informen la normalización del servicio.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirles a los huéspedes de esos pisos que se bañen en el spa. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Apagar el sistema por completo para ahorrar electricidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_122",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #122",
    "description": "Un huésped reporta que se le cayó un anillo de compromiso por el desagüe del lavamanos.",
    "options": [
      {
        "text": "Solicitar al huésped que no abra el grifo, enviar de urgencia a un plomero para desmontar el sifón (trampa en U) debajo del lavamanos, recuperar la joya, rearmar la cañería y limpiar la zona.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Empujar el objeto con un alambre creyendo que es basura atascada. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirle que el anillo ya debe estar en las cloacas y que compre otro. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_123",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #123",
    "description": "El portón automático del estacionamiento se traba, dejando a 5 autos sin poder salir hacia el aeropuerto.",
    "options": [
      {
        "text": "Desbloquear el motor usando la llave de destrabe manual (embrague mecánico), asignar a un guardia para que abra y cierre el portón a mano, e informar de inmediato al servicio técnico automatizador.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirles que esperen 2 horas al técnico mientras pierden sus vuelos. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Intentar chocar el portón con una camioneta del hotel para forzarlo a abrir. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_124",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #124",
    "description": "Desprendimiento de pintura y manchas de humedad/moho en el pasillo adyacente a la zona de saunas.",
    "options": [
      {
        "text": "Identificar y reparar el origen de la fuga de vapor, aplicar tratamiento antihongos profundo, repintar con esmalte epóxi impermeable fuera de horarios pico y mejorar la ventilación del sector.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pintar encima del moho húmedo antes de que pase gerencia. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Colgar un cuadro grande para tapar la mancha de humedad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_125",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #125",
    "description": "Auditoría interna detecta que los extintores de la cocina principal tienen las obleas vencidas.",
    "options": [
      {
        "text": "Reemplazar inmediatamente esos extintores con unidades de reserva del depósito, coordinar la recarga y prueba hidráulica con el proveedor certificado y actualizar el cronograma de control en el sistema.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cambiar las etiquetas de los extintores vencidos por otras de extintores vigentes de menor riesgo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ocultar los extintores vencidos en un armario. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_126",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #126",
    "description": "Una tormenta fuerte con granizo rompe el ventanal de una habitación desocupada.",
    "options": [
      {
        "text": "Ingresar con elementos de protección, sellar la abertura con placas de madera/acrílico (tapiar) de forma temporal para evitar daños por agua, secar la habitación y encargar el cristal a medida.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar la ventana rota asumiendo que \"total no hay nadie adentro\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pegar los vidrios rotos con cinta adhesiva transparente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_127",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #127",
    "description": "El sistema centralizado de calefacción no se detiene en un día inusualmente caluroso de otoño.",
    "options": [
      {
        "text": "Puentear los termostatos dañados, apagar manualmente las calderas o válvulas zonales, habilitar el modo ventilación (fan-coil) en las habitaciones y revisar los sensores exteriores de temperatura.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirles a los huéspedes que abran las ventanas si tienen calor. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Apagar el suministro eléctrico de todo el piso para apagar los ventiladores. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_128",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #128",
    "description": "Falla el temporizador (timer) de las luces del jardín, dejando la fachada a oscuras toda la noche.",
    "options": [
      {
        "text": "Activar los contactores de iluminación de forma manual desde el tablero principal general, mantener el encendido durante el turno noche y cambiar la fotocélula o reloj analógico/digital al día siguiente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar el hotel a oscuras argumentando que el reloj se arreglará solo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Conectar cables pelados para hacer un puente eléctrico riesgoso. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_129",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #129",
    "description": "Huésped no recuerda la clave de su caja fuerte y su pasaporte está adentro, faltando 1 hora para su vuelo.",
    "options": [
      {
        "text": "El gerente de guardia y seguridad deben acudir a la habitación con el dispositivo de anulación electrónica (CEU), verificar la identidad del pasajero de forma rigurosa, abrir la caja frente a él y firmar el registro.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Destruir la caja fuerte a martillazos porque hay apuro. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Negarse a abrirla alegando que el técnico de cajas fuertes trabaja de lunes a viernes. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_130",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #130",
    "description": "Olor nauseabundo proveniente de la trampa de grasa de la cocina invade el comedor.",
    "options": [
      {
        "text": "Coordinar un camión atmosférico de urgencia para el vaciado de la trampa (fuera del horario de servicio si es posible, o de forma aislada), desodorizar los ductos con enzimas y ventilar el salón.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Echar tres litros de lavandina por la rejilla y esperar que se tape el olor. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Echarle la culpa a la red cloacal municipal y no hacer nada. Housekeeping Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_131",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #131",
    "description": "Una mucama encuentra un arma de fuego no declarada en la mesa de luz durante la limpieza diaria.",
    "options": [
      {
        "text": "Detener la limpieza inmediatamente, no tocar el objeto, abandonar la habitación cerrando con llave, y avisar de urgencia a seguridad/gerencia para que contacten a la policía y apliquen el protocolo legal local.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mover el arma para poder limpiar la mesa de luz y volverla a dejar ahí. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Robarse el arma y esconderla en el carro de limpieza. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_132",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #132",
    "description": "Lavadora industrial se descompone a mitad del ciclo dejando sábanas empapadas y sucias.",
    "options": [
      {
        "text": "Transferir las sábanas mojadas a otra máquina disponible, derivar el excedente a un servicio de lavandería externo de contingencia y reportar el código de error de la máquina al servicio técnico.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Escurrir las sábanas a mano y ponerlas directamente en la planchadora industrial, quemándolas. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar la ropa mojada dentro de la máquina durante tres días hasta que huela a podrido. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_133",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #133",
    "description": "Huésped acusa a la mucama de haber tirado una bolsa de compras vacía que él \"guardaba de recuerdo\".",
    "options": [
      {
        "text": "Revisar las bolsas de residuos del piso (si aún no fueron compactadas) con guantes, disculparse por la confusión de considerarlo basura, y re-capacitar al personal sobre no desechar nada que no esté explícitamente en el tacho.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al huésped que \"solo era una bolsa de cartón\" y restarle importancia. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Comprarle una bolsa de basura negra del supermercado para compensarlo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_134",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #134",
    "description": "Falta de uniformes de recambio genera que el personal de piso use prendas rotas o manchadas de lavandina.",
    "options": [
      {
        "text": "Gerencia debe autorizar una compra urgente de uniformes estándar o, como medida temporal, proveer delantales nuevos que cubran los daños mientras se gestiona la licitación de la indumentaria corporativa oficial.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Obligarlos a trabajar en su ropa de calle, rompiendo los estándares de seguridad visual. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Sancionar a los empleados por estar mal presentables cuando es culpa del hotel no proveer la ropa. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_135",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #135",
    "description": "Toallas blancas de felpa severamente manchadas con tinte de pelo negro por una pasajera.",
    "options": [
      {
        "text": "Separar la lencería manchada para no contaminar el resto, aplicar tratamientos de recuperación química específicos (oxígeno activo). Si el daño es irreversible, cargar el costo a la cuenta de la habitación por uso indebido.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Lavarlas normalmente y dejar que manchen todo el lote de sábanas. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Doblar la toalla manchada hacia adentro y ponérsela a otro huésped. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_136",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #136",
    "description": "Una aspiradora en cortocircuito hace saltar la térmica, dejando sin luz a todo un pasillo de habitaciones.",
    "options": [
      {
        "text": "Etiquetar la aspiradora como \"Fuera de Servicio\", solicitar a mantenimiento que restablezca la llave térmica del cuadro eléctrico del piso inmediatamente, y asignar una escoba o equipo de reemplazo a la mucama.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Abandonar el piso a oscuras y bajar a tomar un descanso. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Intentar forzar la palanca de la térmica con cinta adhesiva para que no salte. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_137",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #137",
    "description": "El carro de limpieza rueda por una pendiente leve y raya profundamente la puerta de madera de una Suite.",
    "options": [
      {
        "text": "Informar del daño a supervisión y mantenimiento para programar el pulido o masillado de la puerta, e instalar cuñas o trabas de freno más efectivas en las ruedas de todos los carros del hotel.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pintar la raya con un marcador negro esperando que nadie se dé cuenta. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar al huésped de adentro por abrir la puerta de golpe. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_138",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #138",
    "description": "Queja por olor insoportable en una habitación limpia; se descubre un pañal sucio escondido detrás del televisor.",
    "options": [
      {
        "text": "Retirar el objeto, realizar una limpieza profunda con desinfectantes enzimáticos, utilizar un ozonizador para neutralizar el ambiente y pedir disculpas al huésped actual por la omisión de la mucama anterior.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Rociar perfume sobre el pañal y dejarlo escondido. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Acusar al huésped actual de haberlo puesto ahí para no pagar la tarifa. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_139",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #139",
    "description": "Mucama finaliza la limpieza pero olvida cerrar la puerta, dejando la habitación expuesta por horas con objetos de valor dentro.",
    "options": [
      {
        "text": "Seguridad debe bloquear el área, realizar un inventario visual sin tocar nada, verificar cámaras para asegurar que nadie entró, cerrar correctamente e iniciar una medida disciplinaria formativa para la empleada.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Entrar a robar algo asumiendo que le echarán la culpa al que dejó la puerta abierta. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "No hacer nada y esperar que el huésped no se dé cuenta del peligro al que estuvo expuesto. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_140",
    "department": "Gerencia",
    "title": "Caso de Gerencia #140",
    "description": "VIP con asma solicita almohadas hipoalergénicas, pero no hay stock en la ropería central.",
    "options": [
      {
        "text": "Realizar una compra de emergencia (caja chica) en una tienda blanca local cercana, enfundarlas y entregarlas rápidamente, garantizando la salud respiratoria y el descanso del huésped.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ponerle tres fundas a una almohada de plumas y mentirle diciendo que es sintética. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirle que duerma sin almohada por recomendación médica. Gerencia Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_141",
    "department": "Gerencia",
    "title": "Caso de Gerencia #141",
    "description": "El dashboard de gestión interno arroja un Error 500 al procesar las encuestas del mes, impidiendo ver las métricas clave.",
    "options": [
      {
        "text": "Escalar el registro de errores (logs) al desarrollador o soporte IT para aplicar un parche rápido (hotfix) en el repositorio, y mientras tanto mostrar datos cacheados o exportaciones manuales provisionales.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Reiniciar repetidamente la página hasta que el servidor colapse por exceso de peticiones. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Eliminar la cultura de medición de datos y volver a imprimir todo en papel. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_142",
    "department": "Gerencia",
    "title": "Caso de Gerencia #142",
    "description": "Un restaurante de la competencia inicia una campaña agresiva para robarse (poaching) al Chef Ejecutivo y sous-chefs.",
    "options": [
      {
        "text": "Realizar una reunión de retención, igualar o mejorar la oferta salarial si el presupuesto lo permite, ofrecer bonos por cumplimiento de métricas gastronómicas y fortalecer el plan de carrera interno.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejarlos ir sin pelear argumentando que \"nadie es indispensable\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Amenazarlos con difamarlos en la industria gastronómica local si deciden irse. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_143",
    "department": "Gerencia",
    "title": "Caso de Gerencia #143",
    "description": "La matriz corporativa impone un recorte de presupuesto del 15% a mitad de temporada alta sin previo aviso.",
    "options": [
      {
        "text": "Analizar los centros de costos, congelar contrataciones no esenciales, renegociar plazos de pago con proveedores, y recortar gastos indirectos sin afectar el inventario crítico de atención al cliente (amenities/comida).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Despedir al 15% del personal operativo de contacto directo, destruyendo la calidad del servicio. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ignorar la orden corporativa, gastar el doble y falsificar los libros contables. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_144",
    "department": "Gerencia",
    "title": "Caso de Gerencia #144",
    "description": "La cuenta de Instagram del hotel sufre un hackeo y se publican estafas de criptomonedas a los seguidores.",
    "options": [
      {
        "text": "Activar el protocolo de ciberseguridad: recuperar el acceso mediante el correo de administrador, borrar las publicaciones, activar autenticación de dos pasos, y emitir un comunicado oficial disculpándose y advirtiendo del fraude.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Crear una cuenta nueva desde cero perdiendo a todos los seguidores orgánicos. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Mandar mensajes privados insultando a los hackers desde la cuenta personal del gerente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_145",
    "department": "Gerencia",
    "title": "Caso de Gerencia #145",
    "description": "Un proveedor clave de lavandería retiene la entrega de blancos porque contaduría adeuda tres facturas.",
    "options": [
      {
        "text": "El Gerente General interviene aprobando un pago de transferencia urgente o emitiendo un cheque diferido avalado, asegurando el abastecimiento del día y resolviendo el cuello de botella en el flujo de cuentas por pagar.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al proveedor que el sistema contable \"está caído\" y evadir sus llamadas. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Mandar a las mucamas a lavar sábanas a mano en las bañeras de las habitaciones. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_146",
    "department": "Gerencia",
    "title": "Caso de Gerencia #146",
    "description": "Huésped amenaza con una demanda millonaria tras tropezar con una baldosa suelta en el lobby.",
    "options": [
      {
        "text": "Brindar asistencia médica inmediata, documentar el incidente (fotos de la baldosa y el calzado), activar el seguro de responsabilidad civil del hotel, y derivar toda comunicación al departamento legal corporativo sin admitir culpas financieras in situ.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ofrecerle un millón de pesos de la caja fuerte en efectivo para que no haga juicio. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Echar al huésped del hotel acusándolo de ser torpe. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_147",
    "department": "Gerencia",
    "title": "Caso de Gerencia #147",
    "description": "Falla en la integración (API) entre el Channel Manager y el motor de reservas, generando múltiples sobreventas (Overbooking).",
    "options": [
      {
        "text": "Cerrar ventas temporalmente, aplicar el procedimiento técnico de sincronización forzada para alinear el inventario real (o escalar a los desarrolladores), y derivar a los huéspedes sobrevendidos asumiendo los costos (walk-out).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar la venta abierta para recaudar más dinero y ver qué pasa al momento del check-in. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar a los huéspedes y cancelar sus reservas unilateralmente sin devolver el dinero. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_148",
    "department": "Gerencia",
    "title": "Caso de Gerencia #148",
    "description": "Una encuesta de clima laboral anónima revela maltrato sistémico y acoso por parte del Jefe de Mantenimiento.",
    "options": [
      {
        "text": "Iniciar una investigación confidencial profunda y objetiva desde Recursos Humanos, separar de sus funciones al acusado de forma preventiva con goce de sueldo, y si se comprueba, proceder al despido justificado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ignorar los resultados porque el Jefe de Mantenimiento arregla bien las cosas. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Averiguar quiénes fueron los empleados que se quejaron para sancionarlos por insubordinación. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_149",
    "department": "Gerencia",
    "title": "Caso de Gerencia #149",
    "description": "La municipalidad inicia obras cortando el tráfico en la calle principal del hotel por un mes, afectando la llegada.",
    "options": [
      {
        "text": "Notificar proactivamente a todos los huéspedes con reservas futuras, enviarles mapas con rutas alternativas precisas, y coordinar con el municipio un paso vallado para el descenso exclusivo de valijas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "No avisar a nadie y que los huéspedes averigüen cómo llegar el mismo día. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cancelar todas las reservas del mes cerrando el hotel hasta que terminen las obras. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_150",
    "department": "Front Desk",
    "title": "Caso de Front Desk #150",
    "description": "Empresa multinacional amenaza con llevar su convención anual a la competencia debido a cortes en el Wi-Fi.",
    "options": [
      {
        "text": "El Gerente de TI y Ventas se reúnen con el cliente, se comprometen por contrato a asignarles un ancho de banda dedicado (QoS) o instalar routers temporales en su salón, garantizando la conexión exclusiva para su evento.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mentirles diciéndoles que la competencia tiene un internet peor. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirles que desconecten sus teléfonos móviles y disfruten del evento analógico. Aquí tienes el cuarto y último bloque con 50 problemáticas nuevas (numeradas del 151 al 200), completando así tu base de datos de 200 escenarios operativos para el hotel. Recepción",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_151",
    "department": "Front Desk",
    "title": "Caso de Front Desk #151",
    "description": "Huésped exige la misma habitación en la que se hospedó hace 5 años, pero actualmente está en remodelación.",
    "options": [
      {
        "text": "Explicar que la habitación está siendo renovada para mejorar su experiencia, ofrecer una habitación de categoría similar o superior y asegurar que tiene características equiparables (misma vista, misma cama).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cambiar la reserva a otro huésped y darle la habitación en plena obra sin avisar. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirle que sus gustos son anticuados y obligarlo a tomar otra habitación de menor categoría. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_152",
    "department": "Front Desk",
    "title": "Caso de Front Desk #152",
    "description": "Se recibe un pago con tarjeta de crédito que la terminal POS arroja como \"Robada / Retener Tarjeta\".",
    "options": [
      {
        "text": "Actuar con discreción, retener la tarjeta si es seguro hacerlo, solicitar otra forma de pago o identificación, y avisar a seguridad sin confrontar directamente al cliente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Devolverle la tarjeta rápidamente y pedirle que traiga efectivo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Gritar en el lobby que el cliente es un ladrón y esposarlo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_153",
    "department": "Front Desk",
    "title": "Caso de Front Desk #153",
    "description": "El sistema de asignación de habitaciones coloca a una pareja de luna de miel en camas individuales (Twin).",
    "options": [
      {
        "text": "Reaccionar al momento del check-in, pedir disculpas, hacer un upgrade de cortesía a una habitación matrimonial superior (King) y enviar un detalle romántico (cava/chocolates) para compensar el estrés inicial.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Unir las dos camas individuales rápidamente y dejar la fisura en el medio. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirles que el sistema asigna solo y que duerman separados. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_154",
    "department": "Front Desk",
    "title": "Caso de Front Desk #154",
    "description": "Huésped extranjero llega sin sello de ingreso al país y la policía migratoria lo busca en el hotel.",
    "options": [
      {
        "text": "Cooperar plenamente con las autoridades mostrando los registros, sin poner en riesgo al personal, y proporcionar acceso a la habitación según la orden judicial o legal correspondiente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ayudar al huésped a escapar por la puerta trasera del hotel. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Negar la existencia del huésped para no tener mala reputación con las autoridades. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_155",
    "department": "Front Desk",
    "title": "Caso de Front Desk #155",
    "description": "Se agotan los paraguas de cortesía en un día de lluvia torrencial y los huéspedes exigen salir.",
    "options": [
      {
        "text": "Llamar a taxis para que recojan a los huéspedes directamente en la marquesina cubierta y enviar urgentemente al personal de compras por un lote nuevo de paraguas descartables económicos para salvar la jornada.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirles que debieron ver el pronóstico del clima antes de viajar. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarles un depósito de garantía abusivo a los únicos que lograron conseguir uno. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_156",
    "department": "Front Desk",
    "title": "Caso de Front Desk #156",
    "description": "Cliente regular llega con una mascota exótica (ej. un reptil) no permitida por la política \"Pet-Friendly\" (solo perros/gatos).",
    "options": [
      {
        "text": "Explicar amablemente las normativas sanitarias y de seguridad, ofrecer asistencia para contactar una guardería de mascotas exóticas especializada en la ciudad y resguardar la reserva.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejarlo pasar advirtiéndole que lo esconda de la gerencia. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Llamar a control animal para confiscarle la mascota en el momento. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_157",
    "department": "Front Desk",
    "title": "Caso de Front Desk #157",
    "description": "El transporte de la tripulación de una aerolínea se retrasa, dejando a 20 pilotos/azafatas estancados en el lobby de madrugada.",
    "options": [
      {
        "text": "Habilitar rápidamente un salón privado o sector del bar, ofrecer agua, café y asientos cómodos sin cargo mientras recepción contacta a la compañía de transportes para acelerar la llegada.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pedirles que esperen de pie afuera del hotel para no hacer bulto en el lobby. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarles el café a precio premium aprovechando la espera. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_158",
    "department": "Front Desk",
    "title": "Caso de Front Desk #158",
    "description": "Huésped reporta que clonaron su tarjeta durante su estadía y culpa abiertamente al recepcionista.",
    "options": [
      {
        "text": "Mantener la calma, ofrecer acceso a las auditorías del sistema de pagos (que está encriptado) y a las grabaciones de cámara para demostrar la transparencia, y ayudarle a contactar a su banco.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Discutir con el huésped defendiendo el honor del recepcionista a los gritos. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pagarle al huésped con dinero de la caja chica para que se calle. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_159",
    "department": "Front Desk",
    "title": "Caso de Front Desk #159",
    "description": "Falla la impresora fiscal al momento de emitir la factura a un cliente corporativo que se va urgente al aeropuerto.",
    "options": [
      {
        "text": "Emitir un recibo provisorio manual con sello del hotel, anotar sus datos fiscales y correo electrónico, garantizando el envío de la factura electrónica en PDF (facturación en la nube) dentro de las 24 hs.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Retener al cliente obligándolo a perder el vuelo hasta que el sistema vuelva. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Negarse a emitir ningún comprobante argumentando fuerza mayor. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_160",
    "department": "F&B",
    "title": "Caso de F&B #160",
    "description": "Llega un arreglo floral inmenso y anónimo para un huésped que exigió privacidad estricta (Incógnito).",
    "options": [
      {
        "text": "Recibir el paquete en la trastienda, contactar a la habitación por vía telefónica interna consultando si espera una entrega y respetar su decisión de aceptarlo o rechazarlo por seguridad.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mandar al mensajero directamente a golpear la puerta de la habitación. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Quedarse con las flores en recepción para adornar el mostrador. Alimentos y Bebidas Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_161",
    "department": "F&B",
    "title": "Caso de F&B #161",
    "description": "Se derrama una olla de sopa de 20 litros en el suelo de la cocina en pleno despacho de cenas.",
    "options": [
      {
        "text": "Señalizar el área con conos amarillos inmediatamente para evitar resbalones severos, desviar el tráfico del personal y asignar a los ayudantes de cocina la recolección con palas profundas y secado rápido.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirar toallas de tela encima y seguir cocinando pisando la zona. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Obligar al cocinero responsable a limpiar con un cepillo de dientes como castigo mientras los pedidos se atrasan. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_162",
    "department": "F&B",
    "title": "Caso de F&B #162",
    "description": "Cliente acusa intoxicación alimentaria un día después de haber comido mariscos en el restaurante.",
    "options": [
      {
        "text": "Mostrar total preocupación, solicitar un certificado médico, activar el protocolo de análisis bromatológico interno (revisar muestras testigo y lote de mariscos de esa fecha) y derivar a la aseguradora del hotel.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Asumir la culpa inmediatamente y devolverle todo el dinero de su estadía entera sin investigar. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Acusar al cliente de tener un estómago débil y negarle cualquier atención. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_163",
    "department": "F&B",
    "title": "Caso de F&B #163",
    "description": "Proveedor de panificados entrega productos aplastados y humedecidos justo antes del desayuno de un evento.",
    "options": [
      {
        "text": "Rechazar la entrega, activar un plan B sacando panadería congelada del stock de emergencia, y hornear inmediatamente para cubrir el servicio de forma inhouse.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cortar el pan aplastado en pedazos pequeños para que no se note el defecto. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Poner un cartel en el buffet diciendo \"Hoy no hay pan por culpa del proveedor\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_164",
    "department": "F&B",
    "title": "Caso de F&B #164",
    "description": "Camarero sirve una bebida alcohólica fuerte por error a un menor de edad en una mesa familiar numerosa.",
    "options": [
      {
        "text": "Retirar la bebida al instante en cuanto se detecte el error, disculparse profundamente con los padres, reemplazarla por un mocktail (trago sin alcohol) de cortesía y aplicar medidas disciplinarias al mesero.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Esperar que el niño se lo tome y cobrarlo disimuladamente. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Echarle la culpa a los padres por no prestar atención a lo que pide su hijo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_165",
    "department": "F&B",
    "title": "Caso de F&B #165",
    "description": "Cliente pide un vino premium y al descorcharlo el sommelier nota que huele a humedad (enfermedad del corcho / TCA).",
    "options": [
      {
        "text": "El sommelier debe disculparse, retirar la botella defectuosa, traer una nueva de la misma añada/etiqueta y abrirla con copas limpias frente al cliente para validar la correcta oxigenación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tapar el olor decantando el vino y sirviéndolo igual asumiendo que el cliente no sabe de vinos. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle al cliente la botella mala y obligarlo a pedir otra. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_166",
    "department": "F&B",
    "title": "Caso de F&B #166",
    "description": "El hielo de las máquinas expendedoras o del bar sale con pequeñas partículas negras de suciedad.",
    "options": [
      {
        "text": "Frenar el uso del hielo de esa máquina al instante, vaciar la tolva, solicitar hielo embolsado comercial de contingencia y programar con mantenimiento una limpieza de filtros de agua y sanitización del equipo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Servir el hielo oscuro y decir que es hielo con carbón activado (de moda). Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Usar un colador para separar la suciedad y poner el hielo sucio en los vasos igual. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_167",
    "department": "F&B",
    "title": "Caso de F&B #167",
    "description": "Dos camareros chocan en las puertas batientes y rompen toda la vajilla sucia de un carro en medio del salón.",
    "options": [
      {
        "text": "Intervenir de inmediato para que ningún cliente se corte, acordonar el área, retirar a los camareros ilesos de la vista del público y limpiar rápidamente en silencio con escobillones de goma.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar los vidrios rotos en el piso y pedirle a los clientes que caminen con cuidado. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Retar a los camareros a los gritos frente a los comensales haciéndolos pagar la vajilla. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_168",
    "department": "F&B",
    "title": "Caso de F&B #168",
    "description": "Huésped exige que en la cocina del hotel le preparen un pescado crudo que él mismo pescó esa mañana.",
    "options": [
      {
        "text": "Negarse amablemente explicando las estrictas normativas bromatológicas (HACCP) que impiden ingresar materia prima externa no trazable a la cocina del hotel por riesgo de contaminación cruzada.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cocinar el pescado a escondidas para complacer al cliente y ganar una buena propina. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Tirar su pescado a la basura directamente porque \"huele feo\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_169",
    "department": "F&B",
    "title": "Caso de F&B #169",
    "description": "Falla el sistema de comandas en monitores (KDS) y se apagan las pantallas en pleno servicio de cena.",
    "options": [
      {
        "text": "Pasar automáticamente al sistema de comandas en papel (bochas/comanderas de emergencia), asignar un \"cantor\" en la cocina para organizar los tickets, e informar a los salones sobre posibles demoras de 10 minutos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cerrar el restaurante temporalmente hasta que se reinicie el servidor de IT. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pedirle a los camareros que se acuerden de memoria los platos de 20 mesas. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_170",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #170",
    "description": "Cliente diabético sufre una descompensación (hipoglucemia) en el restaurante.",
    "options": [
      {
        "text": "Actuar rápido: brindarle una bebida azucarada o un sobre de azúcar inmediatamente si está consciente, despejar el área y llamar a la cobertura médica del hotel si no recupera la estabilidad.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Venderle un postre carísimo argumentando que es el mejor tratamiento. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pedirle que se desmaye fuera del restaurante para no arruinar el ambiente de la cena. Mantenimiento Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_171",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #171",
    "description": "Inodoro de una habitación VIP se desborda continuamente y el agua residual llega a la alfombra.",
    "options": [
      {
        "text": "Cortar la llave de paso de agua del artefacto inmediatamente, enviar a Housekeeping con aspiradoras de líquidos e inyección-extracción para salvar la alfombra, y destapar la cañería profunda.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirar varias toallas limpias del hotel sobre el desborde y dejar que se sequen solas. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirle al huésped que use el baño del lobby durante todo el fin de semana. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_172",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #172",
    "description": "Ruptura de un ventanal grande en la terraza del piso 10 por fuertes ráfagas de viento.",
    "options": [
      {
        "text": "Evacuar el sector inferior de la calle o patios para evitar caída de vidrios, instalar un vallado de seguridad perimetral, asegurar el marco desde adentro y convocar a vidrieros para altura extrema.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tapar el agujero del piso 10 con una sábana y cinta adhesiva común. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ignorar el vidrio roto y dejar que el viento siga metiendo lluvia al edificio. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_173",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #173",
    "description": "Los paneles solares térmicos del techo dejan de calentar el agua de la piscina climatizada en pleno invierno.",
    "options": [
      {
        "text": "Encender el circuito secundario de calefacción (calderas a gas/eléctricas de respaldo), colocar una lona térmica sobre el agua por la noche para retener temperatura y verificar los sensores del panel solar.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mentirle a los huéspedes diciendo que la temperatura está a 30°C aunque el agua esté helada. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Obligar a todos a salir de la piscina y clausurarla por el resto de la temporada invernal. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_174",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #174",
    "description": "Olor constante a gas refrigerante escapando de los ductos del aire acondicionado central.",
    "options": [
      {
        "text": "Apagar los equipos VRV o Chillers afectados inmediatamente, ventilar el área por riesgo de asfixia/intoxicación leve y llamar a un técnico frigorista para buscar la fuga con nitrógeno.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Encender inciensos aromáticos cerca de las rejillas para disimular el olor químico. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar los equipos funcionando porque es verano y hace calor, arriesgando fundir los compresores. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_175",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #175",
    "description": "Se rompe la bisagra hidráulica de la puerta principal de la cocina, y queda abierta de par en par.",
    "options": [
      {
        "text": "Desmontar la puerta para evitar accidentes si está suelta, colocar una cortina plástica provisional para contener el ruido/olores, y pedir un repuesto urgente del brazo hidráulico.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejarla trabada con un cajón de cervezas dificultando el paso de los camareros. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cerrarla con candado obligando al personal a dar la vuelta por el lobby con los platos de comida. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_176",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #176",
    "description": "Las bombas dosificadoras de cloro del spa inyectan químicos en exceso por una falla en el sensor electrónico.",
    "options": [
      {
        "text": "Detener las bombas, cerrar el acceso al spa, testear los niveles manualmente (reactivo DPD), forzar el vaciado parcial y llenado con agua limpia hasta estabilizar el cloro libre (1.5 - 3.0 ppm).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar el spa abierto sabiendo que causará irritación en ojos y piel de los clientes. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Tirar vinagre al agua creyendo que va a neutralizar el químico rápidamente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_177",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #177",
    "description": "La alarma de monóxido de carbono suena insistentemente en el estacionamiento subterráneo.",
    "options": [
      {
        "text": "Evacuar el subsuelo inmediatamente, encender manualmente al 100% los extractores forzados de aire, verificar que no haya vehículos en marcha y solicitar a los bomberos que midan el aire antes de reingresar.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Apagar la alarma porque el ruido molesta a las oficinas administrativas de planta baja. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Entrar al subsuelo sin equipo de aire autónomo a buscar el auto que contamina. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_178",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #178",
    "description": "Falla la presurización de la red de incendio (sprinklers) y empiezan a gotear en los pasillos de las habitaciones.",
    "options": [
      {
        "text": "Aislar el anillo de rociadores afectado mediante la válvula seccional, colocar baldes, reparar la pérdida de presión por junta dañada y volver a presurizar el sistema lo antes posible para no quedar sin protección.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cortar el agua general de los sprinklers del hotel por tiempo indefinido. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar que goteen sobre la alfombra generando hongos irreversibles. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_179",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #179",
    "description": "Falla el motor principal del montacargas de servicio y se atascan los insumos del desayuno en el piso bajo.",
    "options": [
      {
        "text": "Implementar un acarreo humano en cadena por la escalera de servicio solo para insumos ligeros, derivar la mercadería pesada en carritos pequeños por los ascensores de huéspedes en horario de nula ocupación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar los insumos en planta baja y cancelar el servicio de desayuno. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Forzar a un empleado a subir 300 kilos de harina por las escaleras, provocándole una hernia. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_180",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #180",
    "description": "Un ave queda atrapada en los conductos de ventilación generando aleteos y quejas de los huéspedes.",
    "options": [
      {
        "text": "Contratar a un especialista en rescate de fauna o control de plagas, abrir la rejilla más cercana al sonido y utilizar trampas de luz/comida para sacar al animal vivo y liberarlo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Encender los extractores al máximo para intentar expulsar o triturar al ave. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Fumigar el ducto con veneno para insectos esperando que el ave muera adentro, generando luego olor a descomposición. Housekeeping Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_181",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #181",
    "description": "Se descubre que una habitación no bloqueada fue usada clandestinamente por personal para dormir.",
    "options": [
      {
        "text": "Limpiar y desinfectar la habitación de inmediato, revisar registros de cerraduras electrónicas para identificar al infractor y aplicar la máxima sanción disciplinaria por uso no autorizado de bienes de la empresa.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Volver a hacer la cama rápidamente y dársela a un huésped como si nada hubiera pasado. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle a la mucama la tarifa rack de una noche en esa Suite. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_182",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #182",
    "description": "Huésped reporta un sarpullido severo y acusa al detergente industrial usado en las sábanas del hotel.",
    "options": [
      {
        "text": "Cambiar toda la ropa de cama por un set lavado con productos neutros/hipoalergénicos, ofrecer derivación médica, e investigar con la lavandería externa si hubo un exceso de alcalinidad en el enjuague.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al huésped que \"es una alergia psicológica\" y no cambiar las sábanas. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Echarle la culpa a su propia crema corporal y negarse a ayudarlo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_183",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #183",
    "description": "Faltante de 20 almohadas de plumas tras el check-out de un grupo escolar o deportivo.",
    "options": [
      {
        "text": "Generar el cargo automático por faltante de inventario a la tarjeta en garantía del coordinador del grupo, informarle del hurto con pruebas, y reponer el stock desde bodega central.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar las habitaciones sin almohadas para los próximos pasajeros que lleguen. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Descontar el valor de las 20 almohadas del sueldo de la supervisora de piso. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_184",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #184",
    "description": "Mucama encuentra envases de medicamentos controlados abiertos y al alcance en una habitación con niños pequeños.",
    "options": [
      {
        "text": "Sin tocar los medicamentos, reportar la situación de riesgo a la supervisión, y que recepción llame a los padres para sugerir amablemente que guarden los fármacos en la caja fuerte por seguridad de sus hijos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirar los medicamentos a la basura para \"proteger\" a los niños. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar los medicamentos sueltos en el borde de la cuna del bebé al limpiar. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_185",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #185",
    "description": "El ducto de recolección de ropa sucia (shut de lencería) se traba completamente entre dos pisos.",
    "options": [
      {
        "text": "Bloquear las compuertas de todos los pisos, utilizar el gancho destrancador desde el piso superior o inferior para liberar el \"nudo\" de sábanas, y prohibir el arrojo de cubrecamas pesados por el ducto.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirar piedras pesadas por el ducto para intentar empujar la ropa trabada. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Echar agua lavandina por el tubo para que \"resbale\", arruinando sábanas de color. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_186",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #186",
    "description": "El proveedor entrega envases de químicos a granel sin etiquetas de seguridad y de colores dudosos.",
    "options": [
      {
        "text": "Poner los químicos en cuarentena, no utilizarlos, exigir al proveedor las hojas de datos de seguridad (MSDS) correspondientes y el etiquetado reglamentario antes de fraccionarlos al personal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Oler y probar un poco de los químicos con el dedo para adivinar qué son. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Rellenar los envases de los carros mezclando todo a ojo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_187",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #187",
    "description": "Huésped mancha la pared empapelada de la habitación con pomada negra al lustrar sus zapatos contra el zócalo.",
    "options": [
      {
        "text": "Usar goma de borrar especial para papel tapiz o productos en seco aprobados. Si el daño es irreparable, emitir la factura por sustitución de ese paño de papel tapiz a la cuenta del cliente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Fregar el papel tapiz con un cepillo y agua, rompiéndolo y generando un agujero. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pintar la mancha negra con un corrector líquido blanco de oficina. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_188",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #188",
    "description": "Carro de limpieza rueda y daña un valioso jarrón decorativo del pasillo de la suite presidencial.",
    "options": [
      {
        "text": "Recoger los fragmentos con cuidado, reportar la rotura a la gerencia de inmediato para su baja contable, y evaluar la reubicación de adornos frágiles fuera de las rutas de tránsito pesado de los carros.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Esconder los pedazos rotos dentro de la basura del pasillo y fingir demencia. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pegar el jarrón con pegamento escolar dejándolo torcido y a punto de romperse de nuevo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_189",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #189",
    "description": "Mucama sufre un corte en la mano al recoger vidrios de una botella rota que un huésped escondió adrede bajo la cama.",
    "options": [
      {
        "text": "Derivar a la mucama a emergencias por ART, registrar el accidente laboral, aplicar la limpieza segura con escobillas de mango largo, y multar al huésped por negligencia y riesgo al personal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Darle una curita y obligarla a seguir limpiando con sangre en las manos. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Despedir a la mucama por no haber usado guantes de acero (inexistentes). Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_190",
    "department": "Gerencia",
    "title": "Caso de Gerencia #190",
    "description": "Faltante masivo de papel higiénico en el depósito general del piso por error de inventario del fin de semana.",
    "options": [
      {
        "text": "Hacer un cruce de stock retirando rollos extra de los pisos de baja ocupación (canibalización temporal) o comprar de urgencia en un comercio mayorista local para garantizar el estándar mínimo por cuarto.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Poner servilletas de papel del restaurante en los baños de las suites. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar los baños sin papel higiénico y explicar que es un nuevo programa ecológico. Gerencia Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_191",
    "department": "Gerencia",
    "title": "Caso de Gerencia #191",
    "description": "El gerente comercial firma un contrato con una OTA (Agencia Online) que incluye cláusulas de paridad abusivas, bloqueando la venta directa.",
    "options": [
      {
        "text": "Revisar legalmente el contrato para anular esa cláusula, lanzar promociones encubiertas en la web propia (códigos promocionales, paquetes de valor añadido) que no rompan la tarifa pública pero ofrezcan más beneficios.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Rendirse, cerrar el canal directo web y dejar que la OTA se lleve el 100% de las comisiones. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cortar relaciones con la OTA unilateralmente, enfrentando una demanda por incumplimiento de contrato. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_192",
    "department": "Gerencia",
    "title": "Caso de Gerencia #192",
    "description": "Un pronóstico de huracán/tormenta severa obliga a decidir si evacuar el hotel y cancelar 300 reservas o mantener la operación.",
    "options": [
      {
        "text": "Convocar al comité de crisis, acatar estrictamente las órdenes de protección civil, cancelar las reservas sin penalidad, reembolsar a los presentes y reubicarlos en áreas geográficas seguras, priorizando vidas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mantener el hotel abierto para no perder dinero y dejar a los huéspedes encerrados en sus habitaciones. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Escapar dejando al personal a cargo de la emergencia sin directrices claras. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_193",
    "department": "Gerencia",
    "title": "Caso de Gerencia #193",
    "description": "Caída drástica del 30% en el ratio de ocupación mensual sin motivos de estacionalidad aparente en el mercado.",
    "options": [
      {
        "text": "Realizar un análisis de Benchmarking urgente; si la competencia mantiene su ocupación, revisar cambios recientes en las políticas de precios, caída en posicionamiento SEO o reseñas negativas virales, y aplicar acciones tácticas correctivas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Bajar todos los precios al 50% desesperadamente, arruinando el posicionamiento de marca. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Asumir que \"la gente ya no viaja\" y no investigar la causa raíz. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_194",
    "department": "Gerencia",
    "title": "Caso de Gerencia #194",
    "description": "Conflicto severo entre áreas: Housekeeping acusa a Recepción de sobrevender y no darles tiempo a limpiar (ventas en falso).",
    "options": [
      {
        "text": "Implementar reuniones diarias de coordinación (Daily Briefings), estandarizar el PMS para bloquear automáticamente las llegadas hasta que el cuarto esté marcado en verde, y ajustar los turnos de mucamas a las curvas de llegada.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ignorar el conflicto considerando que es \"una rivalidad clásica de hoteles\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Despedir a ambos jefes de área esperando que los nuevos líderes se lleven mejor. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_195",
    "department": "Gerencia",
    "title": "Caso de Gerencia #195",
    "description": "Se viraliza una \"Fake News\" en redes de que el hotel entrará en quiebra y los proveedores exigen pago de contado anticipado.",
    "options": [
      {
        "text": "El director financiero emite certificados de solvencia bancaria, el departamento de RP emite un comunicado oficial de prensa desmintiendo el rumor con planes de expansión, y se fortalecen los lazos con los proveedores clave.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ocultarse de los proveedores, no atender los teléfonos y generar aún más sospechas. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pagar a todos por adelantado gastando el flujo de caja operativo y quebrando realmente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_196",
    "department": "Gerencia",
    "title": "Caso de Gerencia #196",
    "description": "Una auditoría fiscal gubernamental sorpresa requiere documentación de hace",
    "options": [
      {
        "text": "Facilitar el espacio para el auditor, movilizar al departamento contable y legal para ordenar los archivos físicos y digitales solicitados de forma transparente, y comprometer un plazo razonable de entrega de faltantes.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mentir diciendo que hubo un incendio que destruyó todos los archivos. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Intentar sobornar al auditor fiscal para que apruebe la inspección. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_197",
    "department": "Gerencia",
    "title": "Caso de Gerencia #197",
    "description": "La implementación de un nuevo motor de reservas propio resulta en una caída del 50% de la conversión web por fallos en el pago.",
    "options": [
      {
        "text": "Restaurar temporalmente el motor de reservas anterior (rollback) para no frenar el flujo de caja, mientras se audita con la pasarela de pagos el problema de la API (timeout) en un entorno de pruebas seguro.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar el motor nuevo fallando durante un mes \"hasta que la gente aprenda a usarlo\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Despedir a todo el equipo de IT y abandonar la venta por internet. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_198",
    "department": "Gerencia",
    "title": "Caso de Gerencia #198",
    "description": "La propiedad pide duplicar el presupuesto de marketing pagándolo mediante el recorte del 100% de los incentivos al personal.",
    "options": [
      {
        "text": "Demostrar financieramente (con el tablero de métricas) que quitar incentivos destruirá el servicio al cliente y el NPS, encareciendo a largo plazo la captación de clientes; proponer optimizar el ROI digital en su lugar.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Recortar los bonos y dejar que la moral del personal se desplome, aumentando la rotación. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Mentirle al propietario y seguir pagando los incentivos a escondidas. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_199",
    "department": "Gerencia",
    "title": "Caso de Gerencia #199",
    "description": "Aumento abrupto y no presupuestado de los impuestos municipales sobre propiedades comerciales del 40%.",
    "options": [
      {
        "text": "Involucrar al departamento legal y a la cámara hotelera local para presentar un amparo colectivo o recurso de reconsideración, mientras se ajusta marginalmente la estrategia de Yield Management para absorber el impacto.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Sumar una \"tasa municipal extra\" en la factura del huésped de forma sorpresiva al check-out. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar de pagar los impuestos por rebeldía, acumulando embargos millonarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_200",
    "department": "Front Desk",
    "title": "Caso de Front Desk #200",
    "description": "Fuga de datos masiva: hackers vulneran la base de datos de los huéspedes robando nombres, emails y datos de tarjetas por negligencia de un proveedor externo.",
    "options": [
      {
        "text": "Bloquear los sistemas afectados, reportar la brecha (Data Breach) a las autoridades de protección de datos, notificar proactivamente a los huéspedes afectados asumiendo la responsabilidad corporativa, y cambiar de proveedor de software.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pagar un rescate en criptomonedas a los hackers y no decirle a ningún huésped que sus datos fueron robados. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar a los recepcionistas por haber usado mal las computadoras y desvincular al hotel del problema. Recepción Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_201",
    "department": "Front Desk",
    "title": "Caso de Front Desk #201",
    "description": "Huésped llega con un comprobante de reserva falso generado por una estafa en redes sociales (ej. perfil falso en Facebook).",
    "options": [
      {
        "text": "Explicarle la situación con mucha empatía en un área privada, sugerirle que contacte a su banco para denunciar el fraude, y ofrecerle una tarifa especial de contingencia si desea quedarse en el hotel.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle simplemente \"lo estafaron\" frente a todo el lobby y pedirle que se retire. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle la tarifa más alta disponible aprovechándose de su desesperación. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_202",
    "department": "Front Desk",
    "title": "Caso de Front Desk #202",
    "description": "La impresora de tarjetas magnéticas se queda sin insumos (tarjetas vírgenes) en pleno check-in de un contingente.",
    "options": [
      {
        "text": "Utilizar el stock de reserva de emergencia, o emitir temporalmente llaves maestras controladas acompañando a cada líder de grupo a su cuarto, mientras se gestiona un envío urgente del proveedor local.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirles a los huéspedes que dejen sus maletas en los cuartos y las puertas abiertas toda la tarde. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar al turno anterior por no haber avisado y hacer esperar al grupo horas en el lobby. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_203",
    "department": "Front Desk",
    "title": "Caso de Front Desk #203",
    "description": "Cliente extranjero exige pagar en dólares físicos exigiendo una tasa de cambio \"paralela\" o no oficial.",
    "options": [
      {
        "text": "Informar amablemente que, por normativas fiscales y contables, el hotel solo puede operar y emitir comprobantes tomando la tasa de cambio oficial vigente del banco nacional.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Aceptar el cambio paralelo a escondidas y quedarse con la diferencia de dinero. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Discutir con el cliente acusándolo de intentar evadir impuestos. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_204",
    "department": "Front Desk",
    "title": "Caso de Front Desk #204",
    "description": "Un visitante pide la llave o acceso a la habitación de un huésped argumentando ser su \"asistente personal\".",
    "options": [
      {
        "text": "Denegar el acceso por políticas de seguridad, contactar al huésped titular por teléfono o sistema interno para verificar su identidad y solicitar autorización verbal o escrita antes de entregar cualquier llave.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Entregar la llave si la persona parece vestida de forma elegante y confiable. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle un soborno al visitante para dejarlo pasar sin avisarle al huésped. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_205",
    "department": "Front Desk",
    "title": "Caso de Front Desk #205",
    "description": "El conserje tercerizado recomienda un área insegura de la ciudad y el turista sufre un robo.",
    "options": [
      {
        "text": "Brindar asistencia inmediata al huésped (contención, ayuda para contactar a su embajada y policía, facilitar teléfono/internet), y suspender la relación con dicho conserje/agencia tras auditar la recomendación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al turista que \"él debería haber investigado en internet antes de salir\". Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ocultar que la recomendación salió del mostrador del hotel para evitar demandas. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_206",
    "department": "Front Desk",
    "title": "Caso de Front Desk #206",
    "description": "Huésped se ofende visiblemente porque el recepcionista no utilizó sus pronombres correctos o título académico (ej. Doctor).",
    "options": [
      {
        "text": "Pedir disculpas sinceras inmediatamente, actualizar el perfil del huésped en el PMS con la nota correspondiente para que todo el personal utilice el trato adecuado, y agradecerle la corrección.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Poner los ojos en blanco y seguir llamándolo como antes. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Burlarse de su exigencia con los compañeros de trabajo a sus espaldas. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_207",
    "department": "Front Desk",
    "title": "Caso de Front Desk #207",
    "description": "Una mujer embarazada solicita atención médica de urgencia por contracciones tempranas en el lobby.",
    "options": [
      {
        "text": "Activar el código de emergencia médica: llamar a la ambulancia, brindarle privacidad trasladándola a una sala contigua o despejando el área, y acompañarla asegurando que esté lo más cómoda posible.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Llevarla afuera del hotel para que \"no asuste\" a los demás clientes si rompe bolsa. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Exigirle que firme un deslinde de responsabilidades del hotel antes de llamar al médico. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_208",
    "department": "Front Desk",
    "title": "Caso de Front Desk #208",
    "description": "Se cae el servidor de correos electrónicos del hotel, perdiendo contacto temporal con las OTA's y reservas del día.",
    "options": [
      {
        "text": "Acceder al panel (Extranet) de cada OTA directamente desde el navegador para verificar las reservas entrantes a mano, y solicitar al área de IT un reinicio del servidor o uso del correo de respaldo temporal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "No hacer nada y esperar a que el correo vuelva, generando sobreventas inevitables. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Rechazar a todos los walk-ins del día por miedo a no tener el control del inventario. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_209",
    "department": "Front Desk",
    "title": "Caso de Front Desk #209",
    "description": "Huésped con movilidad reducida (silla de ruedas) llega y descubre que no se le asignó la habitación adaptada que solicitó.",
    "options": [
      {
        "text": "Corregir el error inmediatamente reasignándole la habitación adaptada correcta (moviendo al huésped que la ocupe si es necesario y compensándolo), y pedir disculpas por el fallo de asignación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Asignarle una habitación común y decirle que \"las puertas son lo bastante anchas\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirle que su solicitud fue solo una \"preferencia\" y no una garantía. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_210",
    "department": "F&B",
    "title": "Caso de F&B #210",
    "description": "Discusión a gritos e insultos entre dos huéspedes en el área de recepción por un choque en el estacionamiento.",
    "options": [
      {
        "text": "Intervenir de inmediato con personal de seguridad o gerencia para separar a las partes, llevarlos a áreas privadas distintas para calmar la situación, y ofrecer llamar a los seguros correspondientes.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Quedarse mirando detrás del mostrador sin hacer nada hasta que lleguen a los golpes. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Tomar partido por el huésped que tiene la habitación más cara. Alimentos y Bebidas Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_211",
    "department": "F&B",
    "title": "Caso de F&B #211",
    "description": "El proveedor de lácteos entrega decenas de litros de leche que vencen al día siguiente.",
    "options": [
      {
        "text": "Rechazar la entrega al instante exigiendo la nota de crédito y el cambio de lote. Si es imperativo usar algo para el día, aceptar solo el mínimo indispensable y el resto se devuelve.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Aceptarla y congelar la leche, alterando su textura, para no tener que reclamar. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Servirla toda la semana asumiendo que \"unos días pasada no hace daño\". Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_212",
    "department": "F&B",
    "title": "Caso de F&B #212",
    "description": "Un cliente solicita comida Kosher certificada, pero el hotel no cuenta con cocina ni vajilla separada.",
    "options": [
      {
        "text": "Informarle honestamente de las limitaciones de la cocina para evitar contaminación, pero ofrecer encargar menús Kosher sellados de proveedores externos certificados de la ciudad y calentarlos en sus envases originales.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cocinar los alimentos regulares y decirle que están bendecidos. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Burlarse de su dieta y decirle que tiene que comer lo que hay. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_213",
    "department": "F&B",
    "title": "Caso de F&B #213",
    "description": "Se rompe el motor de la licuadora industrial del bar en medio de un evento con coctelería \"frozen\".",
    "options": [
      {
        "text": "El jefe de barra modifica el menú sobre la marcha ofreciendo versiones \"on the rocks\" (con hielo en cubos) de los mismos tragos, manda a buscar una licuadora doméstica de la cocina como parche y avisa a los invitados.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Golpear el hielo con un palo de amasar sobre la barra generando un ruido molesto y peligro. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar de servir bebidas y cerrar la barra una hora antes de lo previsto. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_214",
    "department": "F&B",
    "title": "Caso de F&B #214",
    "description": "Comensal se atraganta con un trozo de comida en el restaurante y no puede respirar.",
    "options": [
      {
        "text": "Un miembro del staff capacitado debe aplicar la Maniobra de Heimlich inmediatamente, mientras otro llama a emergencias médicas y se despeja el área alrededor del cliente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ofrecerle un vaso de agua creyendo que eso lo va a destrabar. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Quedarse paralizado y esperar a que otro cliente del restaurante haga algo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_215",
    "department": "F&B",
    "title": "Caso de F&B #215",
    "description": "Un mozo tropieza y derrama una bandeja de café sobre el material de presentación de un evento corporativo.",
    "options": [
      {
        "text": "Disculparse profusamente, traer paños secos al instante, reponer las bebidas sin cargo y ofrecer al organizador imprimir copias de los documentos arruinados en el centro de negocios del hotel sin costo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Secar los papeles con un trapo sucio de la barra, empeorando las manchas. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Huir del salón por vergüenza dejando el derrame sobre la mesa. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_216",
    "department": "F&B",
    "title": "Caso de F&B #216",
    "description": "La campana de extracción de grasa satura sus filtros y gotea aceite hirviendo sobre una freidora.",
    "options": [
      {
        "text": "Apagar la freidora y la campana inmediatamente para evitar un incendio por ignición, limpiar el goteo, cambiar el aceite de la freidora contaminada, y llamar a mantenimiento para el purgado de filtros.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Seguir friendo alimentos bajo el goteo para no retrasar los pedidos. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Poner una olla debajo del goteo para recolectar la grasa y usarla después. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_217",
    "department": "F&B",
    "title": "Caso de F&B #217",
    "description": "Cliente exige llevar su propia botella de vino premium a la cena y se niega categóricamente a pagar el cargo por descorche.",
    "options": [
      {
        "text": "El Maître le explica con cortesía la política del restaurante sobre el servicio de cristalería y atención. Si el cliente se ofusca, se puede bonificar excepcionalmente por única vez si se trata de una ocasión especial o VIP, dejándolo registrado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejarlo consumir la botella y luego agregar el cargo por descorche escondido en la cuenta final. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Confiscarle la botella en la puerta del restaurante hasta que pague. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_218",
    "department": "F&B",
    "title": "Caso de F&B #218",
    "description": "Faltante crítico de vasos limpios en el desayuno por rotura de la bomba del lavavajillas de cristal.",
    "options": [
      {
        "text": "Utilizar temporalmente cristalería de banquetes o vasos térmicos de café de alta calidad para los jugos, destinar a dos lavacopas para el lavado manual a tres tarjas (lavado, enjuague, sanitizado) y avisar a mantenimiento.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Servir los jugos de frutas en tazas de café de cerámica, confundiendo a los clientes. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar los vasos sucios en las mesas y pedirles a los clientes que los reutilicen. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_219",
    "department": "F&B",
    "title": "Caso de F&B #219",
    "description": "Un mesero le prohíbe el ingreso al restaurante a un perro guía (lazarillo) de un cliente no vidente.",
    "options": [
      {
        "text": "El gerente interviene de inmediato, corrige al mesero informándole de las leyes de accesibilidad universal, pide disculpas al cliente, le asigna una mesa cómoda y le sirve agua para el perro.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Exigirle al cliente que deje al perro atado en la puerta del hotel. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar que entre, pero encerrarlos a ambos en un cuarto apartado de servicio. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_220",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #220",
    "description": "El buffet de postres se queda sin opciones libres de azúcar a los 10 minutos de abrir el turno.",
    "options": [
      {
        "text": "El pastelero improvisa un emplatado rápido de frutas frescas de estación con edulcorante o yogurt natural, y se actualiza el historial de demanda para producir más postres dietéticos al día siguiente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mentir diciendo que el pastel de chocolate regular es dietético. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirle a los clientes diabéticos que su cuota ya se terminó. Mantenimiento Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_221",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #221",
    "description": "El agua de la piscina interior amanece turbia y de color verde por un fallo en el retrolavado del filtro de arena.",
    "options": [
      {
        "text": "Clausurar el acceso con cartelería clara, realizar una purga manual de la bomba, aplicar un floculante y alguicida de choque, y pasar el limpiafondo tras la decantación antes de reabrir.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Echar 10 litros de cloro de golpe mientras hay personas bañándose. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejarla así y decirle a los huéspedes que es una piscina de \"aguas termales naturales\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_222",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #222",
    "description": "La llave de paso general de gas de una sección de calderas se oxida y se atasca, impidiendo el corte manual.",
    "options": [
      {
        "text": "Cortar el suministro desde la válvula de entrada exterior de la compañía, ventilar el área por precaución, y reemplazar la llave atascada utilizando llaves de fuerza antichispas con personal matriculado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Intentar aflojarla dándole martillazos de metal, generando riesgo de chispas y explosión. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejarla atascada asumiendo que \"nunca vamos a necesitar cortarla de urgencia\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_223",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #223",
    "description": "Tres televisores LED de un mismo piso se queman simultáneamente tras una tormenta eléctrica.",
    "options": [
      {
        "text": "Reemplazar los equipos quemados con el stock de back-up, revisar la protección del tablero eléctrico (descargadores de sobretensión) de ese circuito específico, y contactar al seguro del edificio.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirles a los huéspedes que ellos rompieron las teles y cobrarles los equipos. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar a las habitaciones sin TV el resto de la semana. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_224",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #224",
    "description": "Falla la cerradura electromagnética de la puerta principal de blindex (lobby), dejando el hotel vulnerable durante la noche.",
    "options": [
      {
        "text": "Posicionar a un guardia de seguridad físico permanente en esa puerta durante toda la madrugada, mientras el técnico reemplaza el electroimán o la placa controladora a primera hora de la mañana.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Bloquear la puerta con una cadena gruesa y candado, atrapando a los huéspedes adentro ante una posible evacuación. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar la puerta abierta de par en par y que el auditor nocturno \"vigile desde lejos\". Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_225",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #225",
    "description": "Un huésped rompe accidentalmente la pantalla táctil del termostato digital de pared con el golpe de una maleta.",
    "options": [
      {
        "text": "Acudir para puentear el equipo (dejando la habitación a una temperatura de confort estándar), programar el cambio de la pantalla para el día siguiente e informar a recepción si corresponde el cobro del daño.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar los cables vivos expuestos en la pared con riesgo eléctrico. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Echar al huésped de la habitación en medio de la noche. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_226",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #226",
    "description": "El sistema de riego automático del jardín se desconfigura y enciende a las",
    "options": [
      {
        "text": "Apagar el sistema de riego manualmente desde la electroválvula o tablero, ofrecer disculpas a los huéspedes dándoles toallas secas de inmediato, y reprogramar el reloj temporizador (timer) para la madrugada.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar que el ciclo de riego termine (30 minutos) esperando que los huéspedes se corran. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Retar a los huéspedes por haber puesto sus reposeras cerca del césped. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_227",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #227",
    "description": "Desprendimiento de baldosas antideslizantes en el borde de la piscina, creando un filo peligroso.",
    "options": [
      {
        "text": "Vaciar parcialmente el nivel del agua, raspar el material viejo, aplicar cemento de contacto subacuático (o epóxi) para pegar las cerámicas de repuesto y colocar conos de seguridad hasta que seque.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tapar los filos cortantes con un pedazo de alfombra vieja y suelta. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ignorarlo hasta que un huésped se corte el pie para justificar el arreglo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_228",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #228",
    "description": "El ascensor de servicio produce un chirrido metálico muy agudo de madrugada que despierta a las habitaciones cercanas.",
    "options": [
      {
        "text": "Dejar el ascensor fuera de servicio temporalmente en el turno noche para garantizar el descanso de los clientes, y coordinar con la empresa de ascensores el engrase de guías a la mañana.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ponerle aceite de cocina a los cables de acero de la cabina. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Decirles a los huéspedes que se pongan tapones para los oídos. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_229",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #229",
    "description": "Las luces de emergencia de las escaleras de incendios tienen las baterías agotadas y no encienden durante una prueba.",
    "options": [
      {
        "text": "Identificar todos los equipos con fallo de autonomía (menos de 90 minutos), comprar las baterías de gel de repuesto y reemplazarlas inmediatamente, registrando la fecha del cambio en la planilla de seguridad.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pintar de rojo los bordes de los escalones para que \"se vean un poco más en la oscuridad\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ocultar el fallo en la bitácora de mantenimiento para no gastar presupuesto. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_230",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #230",
    "description": "Se reporta un panal de avispas gigante en uno de los árboles principales del área de estacionamiento/jardín.",
    "options": [
      {
        "text": "Acordonar un radio amplio alrededor del árbol, desviar a los clientes, y llamar a una empresa de fumigación especializada o bomberos para la remoción segura del panal al atardecer.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirarle piedras al panal para que se caiga y las avispas se vayan solas. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Rociarlo con aerosol común para moscas y salir corriendo. Housekeeping Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_231",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #231",
    "description": "Una mucama desecha por error un costoso retenedor dental (ortodoncia) que el huésped dejó envuelto en una servilleta de papel.",
    "options": [
      {
        "text": "Buscar inmediatamente en las bolsas de residuos del office (con guantes y protección) antes de que vayan al compactador general. Si no aparece, el hotel debe asumir el costo de reposición tras evaluar la responsabilidad.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Culpar al huésped agresivamente por no usar el estuche de plástico. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ofrecerle buscarlo él mismo en el contenedor de basura de la calle. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_232",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #232",
    "description": "La máquina lavadora-extractora de alfombras perfora una manguera e inunda el pasillo del piso 4.",
    "options": [
      {
        "text": "Desconectar la máquina de la corriente, utilizar secadores industriales de aire para evitar que el agua filtre hacia los techos del piso 3, y solicitar mopas de absorción a todo el personal disponible.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Empujar el agua hacia las puertas de las habitaciones ocupadas. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Abandonar la máquina tirando agua y bajar al comedor a almorzar. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_233",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #233",
    "description": "Huésped se retira y deja la habitación repleta de jeringas y agujas usadas (ej. medicación) fuera del descartador.",
    "options": [
      {
        "text": "Prohibir al personal tocar las agujas directamente. Utilizar pinzas largas, colocar el material en contenedores rígidos de residuos patológicos (rojos), y esterilizar completamente los muebles con peróxido.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Barrer las jeringas con la escoba y tirarlas en la basura común, arriesgando a los recolectores. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Agarrar las jeringas con la mano desnuda para terminar de limpiar rápido. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_234",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #234",
    "description": "Rotura masiva de perchas de madera (robos o destrozos) en los armarios tras la salida de un grupo de estudiantes.",
    "options": [
      {
        "text": "Documentar el faltante, cobrar la penalidad al depósito en garantía del coordinador del grupo, y reponer el stock desde la bodega con perchas anti- robo (sin gancho superior) para futuras reservas similares.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "No poner perchas y dejar los armarios vacíos para los siguientes huéspedes del día. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Robar perchas de otras habitaciones aleatorias para completar esas. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_235",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #235",
    "description": "El proveedor de limpieza entrega un lote de suavizante de ropa industrial con olor rancio o a humedad.",
    "options": [
      {
        "text": "Suspender su uso tras el primer lavado de prueba, devolver los bidones al proveedor exigiendo la nota de crédito, y realizar un enjuague adicional a la lencería afectada con vinagre blanco para neutralizar olores.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Usarlo de todas formas rociando perfume barato sobre las sábanas después de tenderlas. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar a los huéspedes del mal olor de las camas. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_236",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #236",
    "description": "Faltante misterioso e inexplicable de secadores de pelo portátiles en 5 habitaciones del mismo piso.",
    "options": [
      {
        "text": "Iniciar una investigación interna con seguridad, cruzar los horarios de acceso de las tarjetas magnéticas del personal y huéspedes en esas habitaciones, y revisar las cámaras de los pasillos para detectar mochilas sospechosas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Descontar el valor de los 5 secadores a la mucama del piso sin tener pruebas. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Acusar de robo al primer huésped que cruce por el pasillo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_237",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #237",
    "description": "Durante el repaso de la tarde, la mucama descubre un gato escondido en el armario en un hotel 100% libre de mascotas.",
    "options": [
      {
        "text": "Avisar a recepción de inmediato para que contacte al huésped, aplicar el cargo por limpieza profunda/ionización establecido en las políticas, y solicitarle amablemente la reubicación de la mascota en una guardería.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar la puerta de la habitación abierta para que el gato se escape al pasillo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Agarrar al gato y dejarlo en la calle fuera del hotel sin avisarle al dueño. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_238",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #238",
    "description": "Aumento de licencias médicas por alergias respiratorias del personal de piso por falta de mantenimiento en los filtros de las aspiradoras.",
    "options": [
      {
        "text": "Gerencia de Housekeeping debe auditar los equipos, comprar filtros HEPA de repuesto inmediato, establecer un cronograma semanal obligatorio de lavado de bolsas, y proveer mascarillas al personal alérgico.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Obligar al personal a aspirar sin encender el filtro, esparciendo el polvo por el aire. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Despedir a las empleadas argumentando que son \"débiles de salud\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_239",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #239",
    "description": "Huésped utiliza toallas blancas de felpa egipcia para limpiar el barro profundo y la grasa de su bicicleta de montaña.",
    "options": [
      {
        "text": "Retirar la lencería arruinada, catalogarla como daño irreparable (scrap) tras un intento de desmanche, facturar el valor de reposición a la cuenta del pasajero e informarle sobre el uso correcto de los blancos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Lavar las toallas con grasa junto con las sábanas limpias de otras habitaciones. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Entrar a la habitación y limpiar los baños con la ropa personal del huésped en venganza. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_240",
    "department": "Gerencia",
    "title": "Caso de Gerencia #240",
    "description": "El carro central de lencería pierde una rueda por exceso de peso y vuelca en el lobby principal frente a los clientes.",
    "options": [
      {
        "text": "Enviar personal rápidamente para levantar los blancos, despejar el área con disculpas a los presentes, llevar el carro roto a mantenimiento y reforzar la capacitación sobre la carga máxima segura de los carros.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar el carro volcado y la ropa limpia en el suelo del lobby todo el día. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Gritarle a la mucama frente a los turistas por haber roto el carro. Gerencia Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_241",
    "department": "Gerencia",
    "title": "Caso de Gerencia #241",
    "description": "Un inspector de bomberos amenaza con clausurar un salón de eventos por exceder en 50 personas la capacidad máxima permitida (aforo).",
    "options": [
      {
        "text": "Acatar la orden del inspector inmediatamente, detener el ingreso en la puerta, derivar el excedente de personas a áreas comunes anexas (lobby/terrazas) si es posible, y revisar las políticas de control de acceso en la venta.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Apagar las luces para que el inspector no pueda contar a la gente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Intentar sobornar al oficial de bomberos en medio del salón. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_242",
    "department": "Gerencia",
    "title": "Caso de Gerencia #242",
    "description": "El banco rechaza el pago de las nóminas (sueldos) del personal un viernes a la tarde por un error en el archivo de transferencias.",
    "options": [
      {
        "text": "El Gerente General y el responsable de RRHH deben comunicar el error de inmediato con total transparencia al personal, gestionar adelantos en efectivo desde la caja fuerte para quienes lo necesiten con urgencia, y asegurar la acreditación el lunes a primera hora.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Irse del hotel el fin de semana apagando el celular corporativo para no escuchar quejas. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar al banco y decirle a los empleados que \"esperen pacientes hasta el mes que viene\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_243",
    "department": "Gerencia",
    "title": "Caso de Gerencia #243",
    "description": "Caída abrupta del ADR (Tarifa Promedio Diaria) por un error tipográfico en la matriz de precios del Channel Manager (ej. vender a $15 en vez de $150).",
    "options": [
      {
        "text": "Detener las ventas inmediatamente cerrando la disponibilidad (Stop Sell), corregir el mapeo de tarifas, y evaluar con el departamento legal y OTA's la cancelación de reservas abusivas generadas por error manifiesto.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Honrar todas las tarifas a $15 sin intentar negociar, quebrando financieramente el mes. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Llamar a los huéspedes insultándolos y diciéndoles que son unos estafadores por comprar a ese precio. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_244",
    "department": "Gerencia",
    "title": "Caso de Gerencia #244",
    "description": "Auditoría interna descubre que el Jefe de Compras contrata sistemáticamente a la empresa de su cuñado como proveedor sin licitación y con sobreprecios.",
    "options": [
      {
        "text": "Recopilar la evidencia documental, suspender temporalmente al implicado, dar de baja los contratos con sobreprecio reasignando a proveedores validados, e iniciar el despido con causa por fraude al código de ética.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pedirle un porcentaje del sobreprecio para no denunciarlo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Felicitarlo por ser astuto para los negocios y dejarlo en su puesto. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_245",
    "department": "Gerencia",
    "title": "Caso de Gerencia #245",
    "description": "Un influencer con 3 millones de seguidores hace una transmisión en vivo quejándose amargamente de la baja velocidad del internet del hotel.",
    "options": [
      {
        "text": "El equipo de Marketing responde rápidamente contactando al influencer en privado, se envía a TI a su habitación para asignar un router dedicado o cable LAN, y se le ofrece una compensación/explicación técnica.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Denunciar el streaming por derechos de imagen y cerrarle la cuenta. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Bloquear su IP en el servidor del hotel dejándolo completamente sin conexión. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_246",
    "department": "Gerencia",
    "title": "Caso de Gerencia #246",
    "description": "Renuncia masiva de 3 recepcionistas clave el mismo día, alegando agotamiento (burnout) por turnos rotativos caóticos.",
    "options": [
      {
        "text": "Aceptar las renuncias procesando las liquidaciones, cubrir las vacantes temporales con supervisores/gerentes, y rediseñar los horarios implementando turnos fijos o predecibles con 2 días de descanso seguidos reales.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Amenazarlos con no pagarles su liquidación final si no se quedan un mes más. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Poner a trabajar al conserje como recepcionista doble turno durante dos meses. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_247",
    "department": "Gerencia",
    "title": "Caso de Gerencia #247",
    "description": "El competidor directo lanza un paquete \"All Inclusive\" al mismo precio que nuestro plan \"Bed & Breakfast\", robando la demanda.",
    "options": [
      {
        "text": "Evitar bajar el precio. En su lugar, empaquetar servicios sin costo marginal alto (ej. acceso libre al spa, late check-out, créditos en A&B) y destacar en marketing la superioridad gastronómica o ubicación exclusiva del hotel frente a las restricciones del Todo Incluido ajeno.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Empezar a regalar la comida también, pero bajando la calidad de los ingredientes a nivel inaceptable para mantener los márgenes. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cerrar temporalmente el hotel asumiendo que no se puede competir. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_248",
    "department": "Gerencia",
    "title": "Caso de Gerencia #248",
    "description": "Se descubre tras un robo que el sistema de cámaras de seguridad (DVR/CCTV) lleva un mes con el disco rígido lleno sin grabar y nadie lo sabía.",
    "options": [
      {
        "text": "Reparar/formatear los discos inmediatamente o implementar almacenamiento en la nube, indemnizar al huésped robado asumiendo la falla de seguridad, e instaurar una rutina de chequeo de grabación diario (Checklist) para seguridad/IT.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mentirle a la policía diciéndole que las cámaras están borrosas. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Fabricar videos falsos para fingir que el huésped perdió el objeto él mismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_249",
    "department": "Gerencia",
    "title": "Caso de Gerencia #249",
    "description": "Los propietarios ordenan recortar en un 80% el presupuesto de mantenimiento preventivo para aumentar sus dividendos trimestrales.",
    "options": [
      {
        "text": "El Gerente General debe elaborar una presentación técnica de riesgo (Matriz de Riesgo) evidenciando que el ahorro hoy costará 10 veces más mañana por roturas mayores (calderas, ascensores) y posibles demandas civiles por accidentes.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Acatar sin chistar, dejando que el hotel se caiga a pedazos paulatinamente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Falsificar facturas de mantenimiento para quedarse con el presupuesto restante. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_250",
    "department": "Front Desk",
    "title": "Caso de Front Desk #250",
    "description": "Notificación de una demanda civil y mediación del Ministerio de Trabajo por presunta discriminación durante el despido de un exempleado.",
    "options": [
      {
        "text": "Reunir toda la documentación legal pertinente (apercibimientos previos, evaluaciones de desempeño, actas de RRHH) que justifiquen el despido por motivos puramente laborales, y asistir a la mediación con asesoramiento legal corporativo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Falsificar la firma del exempleado en documentos de renuncia voluntarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Enviar un grupo de choque a la casa del exempleado para intimidarlo. Recepción Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_251",
    "department": "Front Desk",
    "title": "Caso de Front Desk #251",
    "description": "Walk-in de madrugada pide habitación, pero el PMS está en medio de un mantenimiento programado (caída de servidor).",
    "options": [
      {
        "text": "Consultar el listado impreso de disponibilidad (backup de emergencia), cobrar un depósito en efectivo o tomar datos manuales de tarjeta (MOTO), registrarlo en papel y volcar los datos al sistema una vez restablecido.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle al huésped que vuelva en dos horas cuando el sistema termine de actualizarse. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Darle una llave al azar arriesgándose a entrar a una habitación ocupada. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_252",
    "department": "Front Desk",
    "title": "Caso de Front Desk #252",
    "description": "Huésped se niega a dejar tarjeta de crédito en garantía, solo ofrece efectivo pero no cubre posibles daños.",
    "options": [
      {
        "text": "Explicar amablemente la política de garantía, aceptar un depósito en efectivo mayor (estipulado por gerencia) que se reintegrará al check-out tras la revisión de la habitación, o bloquear los consumos a crédito (línea cero).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Aceptar el efectivo exacto de la tarifa y dejar la habitación sin ningún tipo de garantía ante daños. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Gritarle que las reglas son iguales para todos y cancelar su reserva reteniéndole una multa. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_253",
    "department": "Front Desk",
    "title": "Caso de Front Desk #253",
    "description": "Recepción recibe una notificación legal (carta documento) dirigida a un huésped que ya hizo check-out.",
    "options": [
      {
        "text": "Rechazar cordialmente la recepción de la carta al oficial notificador, indicando que la persona no se encuentra alojada en el establecimiento, y dejar registro en el libro de novedades.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Firmar la recepción del documento legal y tirarlo a la basura. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Darle al oficial notificador el teléfono privado y el correo personal del ex huésped. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_254",
    "department": "Front Desk",
    "title": "Caso de Front Desk #254",
    "description": "Cliente corporativo se queja de que el WiFi es muy lento para una videollamada de negocios crítica.",
    "options": [
      {
        "text": "Ofrecerle acceso temporal a una red cableada (LAN) en el centro de negocios o proporcionarle un código de acceso a la red de alta velocidad (premium) bonificada por las molestias.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle que reinicie su computadora varias veces porque \"seguro es un virus\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informarle que el internet es de cortesía y no se garantizan velocidades. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_255",
    "department": "Front Desk",
    "title": "Caso de Front Desk #255",
    "description": "Huésped reporta la pérdida de una campera y exige una constancia formal del reclamo para su seguro.",
    "options": [
      {
        "text": "Ingresar los datos en la aplicación de Lost & Found del hotel, generar un documento legal o constancia en formato PDF con número de seguimiento y enviárselo por correo electrónico al instante.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Anotar su nombre en un cuaderno borrador y decirle que si aparece lo llaman. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Negarse a dar comprobantes alegando que el hotel no asume responsabilidades por objetos no guardados en la caja fuerte. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_256",
    "department": "Front Desk",
    "title": "Caso de Front Desk #256",
    "description": "Sobreventa (overbooking) en la categoría Standard; solo quedan Suites Presidenciales vacías.",
    "options": [
      {
        "text": "Realizar un upgrade gratuito (cortesía por disponibilidad operativa) a los huéspedes afectados, priorizando a clientes frecuentes o miembros del programa de fidelidad, sin mencionar la palabra \"sobreventa\".",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dividir a la familia afectada en dos habitaciones Standard separadas por varios pisos. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle al huésped la diferencia tarifaria por la Suite de manera obligatoria. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_257",
    "department": "Front Desk",
    "title": "Caso de Front Desk #257",
    "description": "Huésped solicita factura a nombre de una empresa exenta de impuestos pero no trae el certificado de exención.",
    "options": [
      {
        "text": "Emitir la factura temporalmente con los impuestos correspondientes, indicando que si envía el certificado digital escaneado dentro de las 24 horas, se anulará y se refacturará correctamente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Facturar sin impuestos basándose solo en la palabra del cliente y arriesgar una multa fiscal al hotel. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Negarse a facturar y cobrar el total \"en negro\" (sin comprobante fiscal). Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_258",
    "department": "Front Desk",
    "title": "Caso de Front Desk #258",
    "description": "Grupo de egresados hace ruido insoportable en el lobby a las 2 AM, molestando a las habitaciones del primer piso.",
    "options": [
      {
        "text": "El auditor nocturno o seguridad debe acercarse, pedir silencio de forma firme pero respetuosa y ofrecerles trasladarse a un salón insonorizado (ej. sala de juegos) o pedirles que se retiren a sus cuartos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Llamar a la policía inmediatamente sin intentar una mediación interna primero. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Sumarse al grupo de egresados para \"caerles bien\" y pedirles que bajen la voz como favor personal. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_259",
    "department": "Front Desk",
    "title": "Caso de Front Desk #259",
    "description": "Huésped extranjero sufre el robo de su pasaporte en la calle y necesita tomar un vuelo mañana.",
    "options": [
      {
        "text": "Contener al huésped, facilitarle los teléfonos y la dirección de su consulado más cercano, ayudarlo a imprimir la denuncia policial y ofrecer asistencia telefónica para reprogramar su vuelo si fuera necesario.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle que es un problema policial y que el hotel no tiene nada que ver. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cobrarle una tarifa especial por \"asistencia al turista\" antes de prestarle el teléfono. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck"
  },
  {
    "id": "sit_260",
    "department": "F&B",
    "title": "Caso de F&B #260",
    "description": "Falla la placa electrónica de la puerta principal y nadie puede entrar o salir del hotel de forma automatizada.",
    "options": [
      {
        "text": "Activar el modo de anulación mecánica (llave de destrabe de emergencia), dejar la puerta en posición de flujo abierto custodiada por personal de seguridad, y reportar a mantenimiento de guardia.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Mandar a los huéspedes a entrar y salir por la zona de descarga de basura. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Romper el cristal templado con un extintor para permitir el paso. Alimentos y Bebidas Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_261",
    "department": "F&B",
    "title": "Caso de F&B #261",
    "description": "Cliente con dieta estricta cetogénica (Keto) no encuentra opciones adecuadas en el menú de Room Service.",
    "options": [
      {
        "text": "Ofrecerle armar un plato especial al mismo precio (ej. cortes de carne, huevos, palta, vegetales bajos en almidón), comunicar el requerimiento al chef y asegurar que no se utilicen azúcares ni harinas en la cocción.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle que le saque el pan a la hamburguesa estándar con la mano. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informarle que el hotel no es responsable de sus dietas de moda y debe pedir comida por delivery. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_262",
    "department": "F&B",
    "title": "Caso de F&B #262",
    "description": "Corte de agua municipal repentino en pleno banquete de 500 personas impide el lavado de vajilla para el segundo plato.",
    "options": [
      {
        "text": "Activar el protocolo de emergencia de A&B: si no hay reservas en los tanques cisterna, utilizar vajilla premium de alquiler descartable (si se dispone) o rentar vajilla de emergencia a un proveedor local de eventos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Servir el segundo plato en los mismos platos sucios del primer tiempo, solo pasando una servilleta. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cancelar el segundo plato del banquete y devolver una parte mínima del dinero. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_263",
    "department": "F&B",
    "title": "Caso de F&B #263",
    "description": "Inspección interna bromatológica encuentra que las tablas de cortar en cocina no están separadas por colores.",
    "options": [
      {
        "text": "Descartar temporalmente la producción sospechosa de contaminación cruzada (ej. pollo crudo y vegetales), comprar de urgencia el juego de tablas reglamentarias (rojo, verde, amarillo, blanco, azul) y apercibir al Jefe de Cocina.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Esconder las tablas rápidamente y decirle al auditor que se lavan con lavandina entre uso y uso. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ignorar la norma diciendo que \"los colores son solo un truco de marketing de los fabricantes de plástico\". Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_264",
    "department": "F&B",
    "title": "Caso de F&B #264",
    "description": "Cliente devuelve un vino costoso argumentando que está \"picado\", pero el sommelier verifica discretamente que el vino está en perfectas condiciones.",
    "options": [
      {
        "text": "Priorizar la satisfacción del cliente: retirar la botella sin discutir, ofrecerle otra etiqueta diferente del mismo valor, y el vino abierto se utiliza para venta por copas o en la cocina si su calidad es óptima.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Llevarle la misma botella cinco minutos después diciendo que ya se aireó. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Discutir con el cliente en la mesa explicándole por qué él no tiene paladar para ese vino. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_265",
    "department": "F&B",
    "title": "Caso de F&B #265",
    "description": "El proveedor de hielo se retrasa y la máquina del hotel está averiada un viernes a la noche.",
    "options": [
      {
        "text": "Enviar urgentemente a un empleado en remís/taxi a comprar bolsas de hielo a las estaciones de servicio o supermercados cercanos usando la caja chica, asegurando el suministro mínimo para el bar y room service.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Servir todos los cócteles calientes y decirles a los clientes que es \"al estilo europeo\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cancelar el servicio de barra y cerrar el bar perdiendo toda la facturación de la noche. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_266",
    "department": "F&B",
    "title": "Caso de F&B #266",
    "description": "Un camarero derrama sopa caliente sobre la notebook de un cliente que trabajaba en el restaurante.",
    "options": [
      {
        "text": "Asistir inmediatamente al cliente, ofrecer disculpas formales, secar la zona, y el Gerente de Turno debe tomar los datos para activar el seguro de responsabilidad civil del hotel que cubra el daño del equipo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirarle sal encima a la notebook creyendo que absorberá la humedad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Echarle la culpa al cliente por tener una computadora en un área de comida. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_267",
    "department": "F&B",
    "title": "Caso de F&B #267",
    "description": "Faltante masivo de cubiertos de plata del salón tras un evento privado corporativo.",
    "options": [
      {
        "text": "Revisar las estaciones de desbarase y la zona de recolección de residuos orgánicos por si cayeron accidentalmente a la basura; si se confirma hurto, facturarlo a la empresa contratante según contrato de alquiler.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cobrar el valor de todos los cubiertos descontando el dinero del sueldo de los mozos eventuales. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Reponer con cubiertos de lata baratos sin avisarle a gerencia general. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_268",
    "department": "F&B",
    "title": "Caso de F&B #268",
    "description": "Comensal vegano encuentra un trozo de tocino escondido en su ensalada \"100% plant-based\".",
    "options": [
      {
        "text": "Retirar el plato con profundas disculpas, informar de la grave falta al chef para que revise toda la línea de emplatado, preparar una ensalada nueva y bonificar el 100% de la mesa como compensación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Quitar el tocino con un tenedor frente a él y devolverle el plato riéndose del error. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Acusar al comensal de haber puesto el tocino ahí para comer gratis. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_269",
    "department": "F&B",
    "title": "Caso de F&B #269",
    "description": "Salta la térmica de las heladeras de postres en la cafetería y se pierde la cadena de frío durante la madrugada.",
    "options": [
      {
        "text": "Descartar todos los postres lácteos y cremas por riesgo de intoxicación, documentar la pérdida como merma (scrap), y reponer con pastelería seca hasta que se estabilice el sistema eléctrico.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Poner los postres calientes en el freezer rápido y venderlos igual a la mañana siguiente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Servirlos como \"postres tibios\" promocionándolos como novedad del chef. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee"
  },
  {
    "id": "sit_270",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #270",
    "description": "Cliente se levanta y se va sin pagar (simula ir al baño) en una mesa exterior de la terraza.",
    "options": [
      {
        "text": "Si el cliente es huésped, cargar el monto a su habitación (room charge) tras verificar las cámaras. Si es visitante, reportar el incidente (Walk-out) como merma por robo y mejorar el patrullaje de los mozos en áreas externas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Salir corriendo a perseguirlo por la calle dejando el resto del restaurante desatendido. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Obligar a la recepcionista a pagar la cuenta porque no lo vio salir por el lobby. Mantenimiento Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_271",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #271",
    "description": "Fuga en un caño de agua cloacal sobre el falso techo de yeso (cielo raso) del restaurante principal.",
    "options": [
      {
        "text": "Cerrar inmediatamente esa zona del restaurante, colocar lonas para proteger el mobiliario, cortar el paso de agua del caño superior afectado y convocar a plomería para una reparación y saneamiento urgente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Poner baldes debajo de la gotera sucia y seguir sirviendo comida al lado. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Perforar el techo para que el agua sucia caiga de golpe sobre la barra. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_272",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #272",
    "description": "Ascensor de servicio se frena entre pisos y el intercomunicador de emergencia está desconectado.",
    "options": [
      {
        "text": "Establecer contacto a gritos para calmar a los empleados atrapados, llamar a la empresa de mantenimiento de ascensores y utilizar las llaves de apertura de puertas exteriores solo si el personal tiene la capacitación técnica rigurosa.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Intentar sacar a la gente tirando de ellos desde un piso superior, arriesgando mutilaciones. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Esperar a que la empresa de ascensores venga al día siguiente, dejando a los empleados adentro. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_273",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #273",
    "description": "Termotanque central sufre una microfisura y el agua caliente sale con sedimentos de óxido en las duchas.",
    "options": [
      {
        "text": "Activar el circuito de bypass si existe otro termotanque, purgar las líneas de agua abriendo las canillas de los puntos bajos del edificio, y programar el reemplazo o soldado del tanque averiado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirles a los huéspedes que el óxido es \"barro termal\" beneficioso para la piel. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cortar todo el suministro de agua caliente durante todo el fin de semana sin dar alternativas. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_274",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #274",
    "description": "Sistema de climatización central (Chiller) tira aire caliente en pleno enero por falta de gas refrigerante.",
    "options": [
      {
        "text": "Contratar a técnicos especializados para presurizar el sistema con nitrógeno, encontrar la microfuga, soldarla y realizar la recarga completa de gas, ofreciendo ventiladores a las habitaciones más afectadas provisionalmente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Seguir recargando gas todas las semanas sin buscar la fuga, gastando una fortuna. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Apagar el sistema y decirle a los huéspedes que abran las ventanas en pleno verano. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_275",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #275",
    "description": "Se quema la bomba sumergible de la piscina exterior y el agua no filtra hace",
    "options": [
      {
        "text": "Cerrar la piscina por prevención sanitaria, instalar una bomba externa de superficie provisional (tipo carro) prestada o alquilada para mantener el filtrado, mientras se rebobina el motor de la bomba titular.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirar sobredosis de químicos para mantener el agua transparente aunque esté estancada. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Obligar al personal de mantenimiento a nadar y revolver el agua con escobas. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_276",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #276",
    "description": "Huésped se queja de un \"pitido eléctrico\" constante en la pared que no lo deja dormir.",
    "options": [
      {
        "text": "Enviar a mantenimiento para identificar el origen (suele ser un transformador LED o fuente de alimentación fallida), cortar el suministro de ese artefacto específico para la noche y reemplazar la fuente al día siguiente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Decirle que tiene Tinnitus (zumbido en los oídos) y recomendarle ir al médico. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Romper la pared a martillazos en la madrugada para buscar el ruido. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_277",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #277",
    "description": "Fuerte olor a quemado y humo proveniente del tablero eléctrico general en el subsuelo.",
    "options": [
      {
        "text": "Cortar el suministro general desde la acometida externa, utilizar extintores de CO2 (Clase C) si hay fuego, llamar a bomberos y convocar a un ingeniero eléctrico para evaluar el cortocircuito en las barras colectoras.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirar un balde de agua sobre el tablero eléctrico incendiado. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cerrar la puerta del subsuelo con llave para que el humo no suba y seguir trabajando. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_278",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #278",
    "description": "Rotura del mecanismo automático de las puertas corredizas de la entrada principal.",
    "options": [
      {
        "text": "Desconectar el motor para que queden en modo manual (libres), colocar personal de botones para abrir y cerrar la puerta a los huéspedes, y contactar al proveedor de automatización para cambiar la correa o el sensor.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejarlas trabadas a la mitad obligando a los huéspedes a pasar de costado con las valijas. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Desmontar los cristales dejándolos apoyados peligrosamente contra la pared de la fachada. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_279",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #279",
    "description": "Inundación en el cuarto de bombas debido a una válvula de retención que reventó.",
    "options": [
      {
        "text": "Cerrar las válvulas guillotina adyacentes para detener el flujo, encender las bombas de achique (sumidero) del subsuelo para sacar el agua, y reemplazar la pieza dañada protegiendo los tableros eléctricos cercanos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar que se inunde y esperar que el agua se evapore con los meses. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Poner tablas de madera flotando para que el personal salte sobre el agua. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench"
  },
  {
    "id": "sit_280",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #280",
    "description": "Sistema de extracción de monóxido del estacionamiento no arranca en automático al llegar a niveles tóxicos.",
    "options": [
      {
        "text": "Forzar el arranque en modo manual desde el tablero de control, cerrar el ingreso a nuevos vehículos, y re-calibrar o reemplazar los sensores de monóxido (CO) que fallaron en detectar el umbral.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Poner ventiladores de pie domésticos en las rampas del subsuelo. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Bajar al estacionamiento a respirar hondo para comprobar si hay monóxido. Housekeeping Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_281",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #281",
    "description": "Mucama reporta que la caja fuerte de una habitación desocupada (check-out) quedó bloqueada y cerrada.",
    "options": [
      {
        "text": "El supervisor junto a seguridad deben abrir la caja con la llave física de anulación o el CEU digital, realizar un inventario si hay objetos de valor olvidados (Lost & Found), y dejarla abierta (reseteada) para el próximo huésped.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar la caja cerrada y decirle al próximo huésped que está rota. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Tratar de adivinar combinaciones como \"1234\" o \"0000\" perdiendo horas de trabajo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_282",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #282",
    "description": "Huésped fumó en una habitación de no fumadores y quemó la colcha principal de la cama.",
    "options": [
      {
        "text": "Cargar a la tarjeta del huésped la multa por fumar más el costo de reposición de la colcha dañada, aplicar tratamiento de choque de ozono, y reemplazar los blancos arruinados por unos nuevos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dar vuelta la colcha escondiendo el agujero quemado hacia el lado de los pies. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Llamar a la policía para arrestar al huésped por daños a la propiedad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_283",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #283",
    "description": "Rotura de las ruedas de varios carros de limpieza dificultando el empuje por alfombras gruesas.",
    "options": [
      {
        "text": "Reparar o reemplazar las ruedas giratorias con modelos de poliuretano industrial de alta resistencia, aliviando la carga física (ergonomía) de las mucamas y evitando lesiones de espalda.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Exigirle a las mucamas que tiren de los carros más fuerte, asumiendo el riesgo de ART (accidentes laborales). Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Eliminar los carros y obligarlas a cargar todos los baldes y sábanas en los brazos. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_284",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #284",
    "description": "Desabastecimiento de amenidades líquidas (shampoo/jabón) para los dispensers recargables de las duchas.",
    "options": [
      {
        "text": "Usar el stock de emergencia de frascos pequeños (amenities individuales tradicionales) como parche, mientras se reclama la compra de bidones de 5 litros a granel al departamento de compras.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Rellenar los dispensers de shampoo con jabón líquido de manos diluido en agua. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Poner una pastilla de jabón de tocador adentro del dispenser plástico. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_285",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #285",
    "description": "Se encuentra un fajo grande de dinero en efectivo suelto debajo del colchón durante una limpieza profunda.",
    "options": [
      {
        "text": "No tocar el dinero, llamar inmediatamente al supervisor/seguridad, empaquetarlo en sobre lacrado documentando el monto exacto, y contactar al último huésped que ocupó la habitación para su restitución legal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Repartir el dinero entre el equipo de Housekeeping como \"propina no declarada\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar el dinero ahí para el próximo huésped pensando que es un amuleto de la suerte. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_286",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #286",
    "description": "Mucama sufre una reacción alérgica grave en la piel por utilizar desengrasante puro sin guantes.",
    "options": [
      {
        "text": "Derivar de inmediato a la clínica por accidente laboral, proveer Equipos de Protección Personal (EPP) obligatorios a todo el staff, e instalar dilutores automáticos de químicos para evitar la manipulación directa de concentrados.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ponerle crema humectante y decirle que vuelva a limpiar los baños. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Despedirla por negarse a limpiar a mano limpia. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_287",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #287",
    "description": "Huésped se queja de que le tiraron a la basura un vaso térmico negro de diseño creyendo que era descartable.",
    "options": [
      {
        "text": "Revisar la basura (si es posible), y si el artículo se perdió por un error visual del staff, el hotel asume el costo comprando uno similar o descontándolo de la cuenta del cliente; reforzar instrucción de no tirar objetos sin consultar.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tratar al huésped de mentiroso argumentando que \"eso era basura\". Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ofrecerle un vaso de plástico barato del dispenser de agua a cambio. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_288",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #288",
    "description": "Almohadas de pluma llegan de la lavandería externa con un fortísimo olor a humedad por mal secado.",
    "options": [
      {
        "text": "Rechazar el lote completo documentando la falla de calidad, exigir al proveedor que las vuelva a procesar en ciclos de secado a alta temperatura o proveer almohadas sintéticas de back-up hasta que se resuelva.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Rociarles desodorante textil en spray y ponerles fundas dobles esperando que no se note. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Lavarlas de nuevo en las piletas del hotel y secarlas al sol en la azotea. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_289",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #289",
    "description": "Rotura espontánea del cristal templado de la mampara de baño, estallando en mil pedazos dentro de la bañera (sin huéspedes).",
    "options": [
      {
        "text": "Bloquear la habitación (Out of Order), enviar a Housekeeping con guantes y aspiradora para sólidos, y programar con mantenimiento la instalación de una cortina de baño temporal o el cambio del cristal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Barrer superficialmente dejando microcristales en el desagüe que cortarán al próximo huésped. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Quitar la bañera completa y dejar el cuarto de baño inutilizado indefinidamente. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles"
  },
  {
    "id": "sit_290",
    "department": "Gerencia",
    "title": "Caso de Gerencia #290",
    "description": "Cortinas blackout de una suite presidencial se desprenden del riel superior bloqueando la ventana.",
    "options": [
      {
        "text": "Mantenimiento acude de inmediato con escalera, reemplaza los ganchos deslizantes rotos por repuestos metálicos y asegura la fijación a la pared con tarugos para el peso excesivo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pegar el blackout al marco de la ventana con cinta de embalar. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cortar la tela que cuelga con una tijera arruinando la estética de la cortina. Gerencia Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_291",
    "department": "Gerencia",
    "title": "Caso de Gerencia #291",
    "description": "El dashboard del Tremun Quality Center (NPS) procesa erróneamente las encuestas con puntaje de 8 como \"Promotores\" debido a una regla de cálculo desactualizada.",
    "options": [
      {
        "text": "Ajustar la lógica del código del dashboard inmediatamente para que refleje el estándar real: solo las puntuaciones de 9 y 10 deben clasificarse como \"Promotores\", asegurando que el 7 y 8 pasen estrictamente al grupo de \"Pasivos\".",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar el error en el sistema porque eleva artificialmente los números y hace quedar bien al equipo ante los directivos. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Borrar los datos históricos y cambiar la métrica a \"Estrellas\" para no tener que arreglar la fórmula del NPS. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_292",
    "department": "Gerencia",
    "title": "Caso de Gerencia #292",
    "description": "Se implementa una actualización de código (Front-end) en la web de reservas, pero el diseño resultante rompe la interfaz móvil y los textos se superponen.",
    "options": [
      {
        "text": "Ordenar al equipo de desarrollo que descarte ese código defectuoso, realice un rollback (reversión) a la versión anterior estable de inmediato, y trabaje en un entorno de pruebas (Staging) hasta que la maquetación sea óptima.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Dejar la web rota obligando a los usuarios a reservar por teléfono, asumiendo una pérdida masiva de ventas. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ignorar las quejas asumiendo que los huéspedes tienen teléfonos obsoletos y no saben navegar. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_293",
    "department": "Gerencia",
    "title": "Caso de Gerencia #293",
    "description": "Huelga sorpresiva de recolectores de basura urbanos deja los contenedores del hotel rebalsados por 4 días.",
    "options": [
      {
        "text": "Contratar un servicio privado de volquetes o recolección de residuos patológicos/húmedos certificado de urgencia, y almacenar temporalmente el material reciclable seco en una bodega apartada y refrigerada si es posible.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Tirar las bolsas de basura del hotel en los contenedores de los vecinos de la cuadra. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Apilar la basura putrefacta en la zona de ingreso de proveedores afectando a la cocina. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_294",
    "department": "Gerencia",
    "title": "Caso de Gerencia #294",
    "description": "El proveedor del PMS (Software Hotelero) sufre un ciberataque de ransomware a nivel global, paralizando todos los accesos.",
    "options": [
      {
        "text": "Activar el \"Plan de Continuidad de Negocio\": sacar las carpetas de emergencia impresas (Reportes de Check-in/out del día anterior), pasar a registros en Excel sin conexión a internet, y emitir facturas manuales legales.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Pagar el rescate a los hackers desde las cuentas del hotel sin consultar a las autoridades de ciberseguridad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cerrar el hotel y echar a los huéspedes porque sin sistema \"no se puede trabajar\". Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_295",
    "department": "Gerencia",
    "title": "Caso de Gerencia #295",
    "description": "Un hotel de la misma cadena tiene márgenes operativos (GOP) mucho más altos, y gerencia regional exige explicaciones por nuestro bajo rendimiento.",
    "options": [
      {
        "text": "Realizar una auditoría cruzada de centros de costos (P&L), comparando la estructura de personal, eficiencia energética y renegociación con proveedores locales para alinear las estrategias a los estándares de la cadena.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Manipular los estados financieros moviendo gastos operativos a cuentas de capital (CAPEX) para engañar a la región. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Acusar al otro gerente de estar lavando dinero y negarse a cooperar en la auditoría. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_296",
    "department": "Gerencia",
    "title": "Caso de Gerencia #296",
    "description": "Aumento vertiginoso de quejas por demoras en la recepción; Recursos Humanos reporta una rotación de recepcionistas del 60% semestral.",
    "options": [
      {
        "text": "Intervenir en el clima laboral: auditar el liderazgo del Jefe de Recepción, revisar si los sueldos quedaron por debajo del convenio del sector, e instaurar un sistema de incentivos por metas (upselling) y mejores horarios.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Contratar tres pasantes sin experiencia ni sueldo para que llenen los espacios vacíos del mostrador. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Obligar a las mucamas a cubrir turnos en recepción sin capacitación en sistemas. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_297",
    "department": "Gerencia",
    "title": "Caso de Gerencia #297",
    "description": "Reclamo sindical exige mejoras inmediatas en el menú del comedor de personal por considerar que tiene bajo valor nutritivo.",
    "options": [
      {
        "text": "Iniciar una mesa de diálogo con el chef ejecutivo y los delegados para rediseñar el menú rotativo mensual, incluyendo opciones saludables (proteína magra, vegetales), respetando el costo por cubierto presupuestado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Suspender el comedor de personal y darle a cada empleado una manzana al día como viático. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Amenazar a los delegados con despedirlos si vuelven a quejarse de la comida gratuita. Aplicar esta medida ignora los protocolos corporativos y genera riesgos innecesarios. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_298",
    "department": "Gerencia",
    "title": "Caso de Gerencia #298",
    "description": "Notificación de una multa municipal gravísima por ruidos molestos reiterados provenientes del \"Rooftop Bar\" (Terraza).",
    "options": [
      {
        "text": "Acatar la limitación de decibeles inmediatamente pagando la multa, reorientar los parlantes, invertir en paneles acústicos de contención y restringir el horario de los DJs en vivo para cumplir la ordenanza municipal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Ignorar la multa y subir el volumen de la música para tapar las quejas de los vecinos. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Aunque resuelve el problema superficialmente, carece de empatía y profesionalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Mandar empleados a la casa de los vecinos a intimidarlos para que retiren las denuncias. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_299",
    "department": "Gerencia",
    "title": "Caso de Gerencia #299",
    "description": "La OTA principal (ej. Booking) penaliza al hotel bajándolo a la página 4 de resultados por tener una altísima tasa de cancelaciones.",
    "options": [
      {
        "text": "El Revenue Manager debe modificar las políticas de cancelación a esquemas más restrictivos (ej. \"No Reembolsable\" con tarifa atractiva), pedir tarjeta de crédito obligatoria como garantía, y contactar al Account Manager de la OTA.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Cerrar el canal de la OTA perdiendo el 40% de las ventas anuales por orgullo. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Crear cientos de reservas falsas y concretarlas para engañar al algoritmo. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_300",
    "department": "Gerencia",
    "title": "Caso de Gerencia #300",
    "description": "Caída masiva de los servidores en la nube (AWS/Google Cloud) donde se alojan los paneles de control de métricas de gerencia.",
    "options": [
      {
        "text": "Comunicarse con soporte técnico de TI para confirmar el estatus de la interrupción general, trabajar operativamente enfocándose en el piso (atención in situ) y aguardar la restauración de la plataforma sin afectar a los huéspedes.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      },
      {
        "text": "Culpar al departamento de mantenimiento creyendo que desenchufaron la \"nube\". Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente. Esto puede parecer una solución rápida, pero a la larga genera un impacto negativo profundo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Entrar en pánico, suspender todas las reuniones gerenciales de la semana y detener la facturación. Esta decisión puede ahorrar tiempo, pero compromete seriamente los estándares de calidad. Es una vía rápida que incrementa el riesgo operativo y la insatisfacción del cliente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart"
  },
  {
    "id": "sit_cultura_1",
    "department": "Cultura y Valores",
    "title": "Caso de Cultura: Compañerismo y Estrés (Role-Play)",
    "description": "Un compañero de tu turno está visiblemente abrumado, llorando en el back-office debido a la presión, pero se niega a pedir ayuda oficial para no verse 'débil'. ¿Cómo te acercarías y qué le dirías? (Responde con tus propias palabras):",
    "isOpenEnded": true,
    "options": [],
    "icon": "Heart"
  },
  {
    "id": "sit_cultura_2",
    "department": "Cultura y Valores",
    "title": "Caso de Cultura: Ética Laboral (Role-Play)",
    "description": "El hotel decide implementar una nueva política de atención que, a tu parecer, es engañosa para el huésped, pero tus superiores te exigen aplicarla. ¿Cómo manejas esta discrepancia ética con tu gerente? (Responde con tus propias palabras):",
    "isOpenEnded": true,
    "options": [],
    "icon": "Shield"
  },
  {
    "id": "sit_cultura_3",
    "department": "Cultura y Valores",
    "title": "Caso de Cultura: Clima Laboral (Role-Play)",
    "description": "Durante un evento importante, escuchas a un cliente VIP hacer un comentario ofensivo y denigrante hacia una compañera de tu equipo. ¿Cómo intervienes y qué le dices a ambas partes? (Responde con tus propias palabras):",
    "isOpenEnded": true,
    "options": [],
    "icon": "Users"
  }
];

// Helper: Fisher-Yates Shuffle
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffle options for all situations globally
situations.forEach(sit => {
  shuffleArray(sit.options);
});

module.exports = situations;