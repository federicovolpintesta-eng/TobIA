const situations = [
  {
    "id": "sit_open_1",
    "department": "Front Desk",
    "title": "Caso Crítico: Huésped Furioso (Role-Play)",
    "description": "Un huésped VIP baja a recepción gritando porque su habitación no fue limpiada y exige hablar con el gerente general inmediatamente. Responde con tus propias palabras (Role-Play Abierto):",
    "isOpenEnded": true,
    "options": [],
    "icon": "MessageSquare",
    "isAudioResponse": true,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_cultura_1",
    "department": "Cultura y Valores",
    "title": "Caso de Cultura: Compañerismo y Estrés (Role-Play)",
    "description": "Un compañero de tu turno está visiblemente abrumado, llorando en el back-office debido a la presión, pero se niega a pedir ayuda oficial para no verse 'débil'. ¿Cómo te acercarías y qué le dirías? (Responde con tus propias palabras):",
    "isOpenEnded": true,
    "options": [],
    "icon": "Heart",
    "isAudioResponse": true,
    "rubro": "RRHH"
  },
  {
    "id": "sit_1",
    "department": "Front Desk",
    "title": "Caso de Front Desk #1",
    "description": "Caída del sistema PMS durante el check-out de un grupo.",
    "options": [
      {
        "text": "C) Permitir el check-out del grupo sin verificar los consumos adicionales, esperando que el sistema registre todo automáticamente después.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Informar a los huéspedes que deben esperar en el lobby hasta que el sistema se restablezca, sin ofrecer una alternativa temporal.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Aplicar procedimiento de contingencia manual (planillas impresas) y volcar los datos al sistema cuando regrese la conexión.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_cultura_2",
    "department": "Cultura y Valores",
    "title": "Caso de Cultura: Ética Laboral (Role-Play)",
    "description": "El hotel decide implementar una nueva política de atención que, a tu parecer, es engañosa para el huésped, pero tus superiores te exigen aplicarla. ¿Cómo manejas esta discrepancia ética con tu gerente? (Responde con tus propias palabras):",
    "isOpenEnded": true,
    "options": [],
    "icon": "Shield",
    "isAudioResponse": true,
    "rubro": "RRHH"
  },
  {
    "id": "sit_2",
    "department": "Front Desk",
    "title": "Caso de Front Desk #2",
    "description": "Huésped llega con una reserva confirmada, pero el hotel está en situación de overbooking.",
    "options": [
      {
        "text": "B) Ofrecer una habitación de menor categoría o una solución temporal claramente inadecuada como una cama extra en un espacio no diseñado para ello.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Informar al huésped que la reserva no puede ser honrada debido a un error del sistema y sugerir que busque otro alojamiento por su cuenta.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Derivarlo a un hotel de igual o mayor categoría cercano, cubriendo los gastos de traslado y diferencia de tarifa.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_cultura_3",
    "department": "Cultura y Valores",
    "title": "Caso de Cultura: Clima Laboral (Role-Play)",
    "description": "Durante un evento importante, escuchas a un cliente VIP hacer un comentario ofensivo y denigrante hacia una compañera de tu equipo. ¿Cómo intervienes y qué le dices a ambas partes? (Responde con tus propias palabras):",
    "isOpenEnded": true,
    "options": [],
    "icon": "Users",
    "isAudioResponse": true,
    "rubro": "RRHH"
  },
  {
    "id": "sit_3",
    "department": "Front Desk",
    "title": "Caso de Front Desk #3",
    "description": "Queja por ruidos molestos en la habitación contigua a las 3:00 AM.",
    "options": [
      {
        "text": "B) Realizar una única llamada a la habitación ruidosa para solicitar silencio y considerar el asunto resuelto si no hay respuesta inmediata.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Explicar al huésped que, debido a la alta ocupación, no es posible tomar ninguna acción hasta el cambio de turno en la mañana.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Enviar a seguridad/recepción a solicitar silencio a la habitación ruidosa; si persiste, reubicar al huésped afectado o desalojar al infractor.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_4",
    "department": "Front Desk",
    "title": "Caso de Front Desk #4",
    "description": "Huésped extranjero no habla español ni inglés, y hay un problema con su tarjeta de crédito.",
    "options": [
      {
        "text": "B) Intentar comunicarse usando gestos y repitiendo las frases en español, asumiendo que el volumen ayudará a la comprensión.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Proceder con la cancelación del check-in debido a la dificultad en la comunicación y la falta de una alternativa de pago inmediata.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_5",
    "department": "Front Desk",
    "title": "Caso de Front Desk #5",
    "description": "Cliente frecuente (Promotor histórico) exige un upgrade gratuito a la Suite, pero está ocupada.",
    "options": [
      {
        "text": "C) Ofrecerle un upgrade a una Suite que está marcada como no disponible por mantenimiento, confiando en que se pueda resolver rápidamente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Indicar al cliente que las políticas de upgrades gratuitos han cambiado y no se le puede ofrecer el upgrade solicitado bajo ninguna circunstancia.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Explicar amablemente la ocupación, ofrecerle la mejor habitación disponible en su categoría y enviarle una amenidad de cortesía (vino o postre) para mantener la fidelización.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "B) Informar al huésped que deberá abonar una tarifa adicional por el check-in anticipado, cobrando un día completo sin evaluar la posibilidad de un cargo parcial o cortesía.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Pedir al huésped que espere fuera del establecimiento o en un área común mínima hasta la hora oficial del check-in.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "C) Aceptar la tarifa reportada por el huésped, pero ajustar los servicios incluidos, como el desayuno, para compensar la diferencia.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Insistir en que el huésped abone la tarifa que figura en el sistema, sugiriéndole que resuelva la discrepancia directamente con la agencia de viajes en línea.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
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
        "text": "B) Registrar el pasaporte vencido sin señalar la irregularidad al huésped, priorizando la agilidad del proceso sobre la normativa interna.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Informar al huésped que, al no contar con un documento válido, podría ser necesario contactar a las autoridades de inmigración.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "C) Aplicar una tarifa de reposición de llave significativamente alta antes de concederle una nueva, argumentando la política del hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Emitir una nueva llave preguntando solo el número de habitación y el nombre del huésped, sin solicitar una identificación adicional.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_10",
    "department": "F&B",
    "title": "Caso de F&B #10",
    "description": "Se recibe una llamada de amenaza de bomba en el hotel.",
    "options": [
      {
        "text": "B) Colgar la llamada rápidamente, asumiendo que se trata de una broma o una llamada no seria sin investigar más.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Anunciar en voz alta la amenaza recibida para alertar a todos los presentes, sin seguir un protocolo de evacuación ordenado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_11",
    "department": "F&B",
    "title": "Caso de F&B #11",
    "description": "Huésped reporta una alergia severa al maní después de que ya se le sirvió el plato.",
    "options": [
      {
        "text": "C) Informar al huésped que debería haber notificado su alergia al ordenar y, por lo tanto, el plato no puede ser reemplazado sin costo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "B) Retirar cuidadosamente los restos visibles de maní del plato y devolvérselo al huésped, asumiendo que esto es suficiente para eliminar el riesgo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_12",
    "department": "F&B",
    "title": "Caso de F&B #12",
    "description": "Demora de 50 minutos en un pedido de Room Service (el estándar es 25).",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_13",
    "department": "F&B",
    "title": "Caso de F&B #13",
    "description": "Fuego descontrolado en la zona de la parrilla durante la preparación de un asado para un evento del hotel.",
    "options": [
      {
        "text": "B) Intentar extinguir el fuego arrojando agua sobre la parrilla, sin considerar el tipo de fuego involucrado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Priorizar la atención a otros comensales, esperando que el fuego se extinga por sí solo o que otro miembro del personal se encargue.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Utilizar el extintor de clase K (para grasas/aceites) ubicado en la cocina, evacuar al personal cercano y notificar a mantenimiento.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_14",
    "department": "F&B",
    "title": "Caso de F&B #14",
    "description": "Quiebre de stock de un vino premium que un cliente VIP acaba de pedir.",
    "options": [
      {
        "text": "B) Sustituir el vino solicitado por una opción de menor precio y calidad similar, sin informar previamente al cliente sobre el cambio.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Informar brevemente al cliente que el vino no está disponible y esperar su próxima elección de la carta, sin ofrecer alternativas o disculpas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_15",
    "department": "F&B",
    "title": "Caso de F&B #15",
    "description": "Mesero derrama accidentalmente una copa de vino sobre la camisa del cliente.",
    "options": [
      {
        "text": "C) Sugerir que el incidente ocurrió debido a un movimiento inesperado del cliente, minimizando la responsabilidad del mesero.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Entregarle rápidamente algunas servilletas al cliente para que se limpie y retirarse discretamente, evitando un mayor compromiso.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Disculparse inmediatamente, ofrecer asistencia con paños limpios, cubrir el costo de tintorería/lavandería y ofrecer el almuerzo o cena como cortesía.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_16",
    "department": "F&B",
    "title": "Caso de F&B #16",
    "description": "Falta de reposición en el buffet de desayuno en horario pico; los huéspedes hacen fila.",
    "options": [
      {
        "text": "B) Limitar temporalmente el acceso a ciertas secciones del buffet o apagar algunas luces para gestionar la afluencia de huéspedes, esperando reducir la demanda.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Solicitar apoyo a personal de otros departamentos, como recepción, para asistir en la preparación o reposición de alimentos, sin considerar sus competencias o roles.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Asignar un \"runner\" de la cocina exclusivo para reponer las bandejas críticas (huevos, pan, café) y ofrecer servicio de café a la mesa a los que esperan.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "C) Informar al gerente de inmediato para que sea él quien decida si el mesero debe asumir el cargo por las bebidas disputadas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Insistir firmemente al huésped que debe firmar la cuenta, ya que el sistema no permite modificaciones posteriores una vez emitida.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_18",
    "department": "F&B",
    "title": "Caso de F&B #18",
    "description": "Proveedor de pescados y mariscos llega 4 horas tarde, afectando el menú del día.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_19",
    "department": "F&B",
    "title": "Caso de F&B #19",
    "description": "Vajilla de un banquete sale del lavavajillas industrial con restos de comida.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_20",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #20",
    "description": "Cliente vegano se queja de que la única opción en la carta es una ensalada básica.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_21",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #21",
    "description": "El aire acondicionado de una Suite gotea agua directamente sobre la cama.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "B) Intentar reiniciar el sistema del ascensor desde el panel de control, solicitando a los huéspedes que permanezcan en silencio para escuchar las indicaciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Esperar a que los huéspedes se calmen por sí mismos antes de intervenir, para evitar generar pánico innecesario.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_23",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #23",
    "description": "Corte general de luz en la zona y el grupo electrógeno no arranca automáticamente.",
    "options": [
      {
        "text": "C) Notificar a todos los huéspedes que el corte es un evento imprevisto y que deben esperar pacientemente sin generar demandas excesivas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "B) Activar la iluminación de emergencia y esperar las instrucciones de la gerencia antes de intentar cualquier acción con el generador.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_24",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #24",
    "description": "Los parámetros químicos de la piscina exterior están desbalanceados (pH muy alto, cloro bajo).",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_25",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #25",
    "description": "Fuerte olor a gas reportado cerca de la cocina central.",
    "options": [
      {
        "text": "B) Intentar localizar la fuente del olor revisando manualmente las conexiones de gas, mientras se informa a los demás departamentos que eviten el uso de encendedores.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Asumir que el olor es parte del proceso normal de cocción y limitarse a ventilar el área con los extractores.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Cerrar inmediatamente la llave de paso principal, ventilar el área, evacuar al personal y llamar a un gasista matriculado / bomberos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "B) Indicar al huésped que es un fenómeno natural y que el agua es segura para bañarse, ofreciéndole una botella de agua mineral para beber.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Contactar inmediatamente al departamento de mantenimiento y esperar su diagnóstico antes de tomar cualquier acción o informar al huésped.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "B) Ofrecer al huésped una habitación temporal mientras se gestiona el cambio de la cerradura con el proveedor, indicándole que el proceso puede tardar algunas horas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Solicitar al huésped que intente abrir la puerta varias veces, ya que a veces las cerraduras electrónicas tienen fallos intermitentes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_28",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #28",
    "description": "Filtración grave de agua desde el techo hacia el lobby principal.",
    "options": [
      {
        "text": "C) Colocar varios baldes y toallas en la zona afectada y notificar a la gerencia para que evalúe la situación en su próximo turno.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Avisar a los huéspedes que caminen con cuidado por la zona mojada y continuar con las operaciones normales del lobby sin señalizar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Aislar la zona con señalización de peligro, desviar a los huéspedes, identificar y cortar la llave de paso del piso superior responsable de la fuga.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "B) Indicar a los huéspedes que el problema de las calderas es ajeno al hotel y que se solucionará cuando la empresa de servicio externo esté disponible.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Sugerir a los huéspedes que utilicen los gimnasios cercanos para ducharse o que calienten agua en sus habitaciones con hervidores eléctricos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "B) Enviar un comunicado general a las habitaciones del piso informando sobre la interrupción del servicio de TV y que se está trabajando en una solución a largo plazo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Sugerir a los huéspedes que revisen la conexión Wi-Fi de sus propios dispositivos, ya que a menudo la falla es del usuario y no del hotel. Housekeeping",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_31",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #31",
    "description": "Mucama encuentra un reloj de alta gama olvidado en una habitación recién desocupada.",
    "options": [
      {
        "text": "C) Dejar el reloj en un lugar visible de la habitación, pensando que el huésped podría volver a buscarlo antes de que se limpie por completo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "B) Entregarlo a un colega de otra área para que lo guarde, con la instrucción de que lo entregue al huésped si lo reclama.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_32",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #32",
    "description": "Faltante crítico de toallas limpias desde la lavandería externa en horario de check-in.",
    "options": [
      {
        "text": "C) Informar a los huéspedes al momento del check-in que no hay toallas disponibles y que se les entregarán cuando lleguen.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "B) Utilizar toallas de otra categoría inferior o de un color diferente, argumentando que son una opción más ecológica.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "B) Colocar un aviso de \"ventilación en proceso\" en la puerta de la habitación y dejar la ventana abierta por unas horas antes de considerarla lista.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Reportar el olor a humo y el cargo a la cuenta del huésped, pero sin proceder con una limpieza especializada, esperando que el tiempo disipe el olor.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_34",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #34",
    "description": "Carro de limpieza es dejado bloqueando parcial o totalmente una salida de emergencia.",
    "options": [
      {
        "text": "B) Mover el carro ligeramente para que no obstruya completamente el paso, asumiendo que es una solución temporal y suficiente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Esperar al final del turno de limpieza para mover el carro, ya que solo es un estorbo menor y no una emergencia inminente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_35",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #35",
    "description": "Huésped acusa al personal de Housekeeping de haberle robado dinero en efectivo de la mesa de luz.",
    "options": [
      {
        "text": "B) Informar al huésped que el hotel no se hace responsable por objetos de valor no depositados en la caja fuerte y sugerir que revise sus pertenencias nuevamente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Solicitar al huésped que llene un formulario de queja y que espere una respuesta por correo electrónico en los próximos días hábiles.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Iniciar el protocolo de seguridad: auditar la cerradura electrónica para ver quién entró, suspender la limpieza de esa habitación e involucrar a la gerencia y policía local si es necesario.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "C) Marcar la habitación como \"no disponible\" en el sistema y esperar la inspección de mantenimiento sin tomar medidas inmediatas sobre la ropa de cama.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Limpiar la habitación con desinfectantes de uso general y cambiar toda la ropa de cama, asumiendo que con eso es suficiente para eliminar la plaga.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_37",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #37",
    "description": "Mascota de un huésped \"Pet-Friendly\" hizo sus necesidades en la alfombra.",
    "options": [
      {
        "text": "B) Realizar una limpieza superficial con productos genéricos para mantener la apariencia, sin abordar la eliminación profunda de olores ni aplicar cargos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Informar al huésped que, según la política, él es responsable de la limpieza profunda, sugiriéndole que contrate un servicio externo a su cargo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_38",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #38",
    "description": "La inspección de calidad revela pelos en el lavamanos después de que la habitación fue marcada como \"Limpia\".",
    "options": [
      {
        "text": "C) Dejar una nota al personal de limpieza para que sea más cuidadoso en el futuro, considerando que el huésped probablemente no notará un detalle menor.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "B) El supervisor limpia el área personalmente para evitar demoras, sin documentar la falla ni notificar al personal responsable para no causar roces.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_39",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #39",
    "description": "Huésped cuelga el cartel de \"No Molestar\" durante 3 días seguidos.",
    "options": [
      {
        "text": "B) Asumir que el huésped desea privacidad absoluta y esperar hasta su check-out para realizar la limpieza y el control de seguridad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Dejar un mensaje genérico en la habitación pidiendo que se comunique si requiere servicio, sin realizar ningún seguimiento proactivo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Dejar una nota bajo la puerta ofreciendo el servicio. Al tercer día, por protocolo de seguridad (Wellness Check), gerencia o seguridad debe hacer un contacto verbal o físico.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_40",
    "department": "Gerencia",
    "title": "Caso de Gerencia #40",
    "description": "Desabastecimiento de amenidades (shampoo, jabón) en el cuarto de insumos del piso.",
    "options": [
      {
        "text": "C) Reutilizar envases parcialmente usados de otras habitaciones para reponer los faltantes, bajo la premisa de optimizar recursos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "B) Completar las habitaciones con el resto de las amenidades y notificar a la recepción que informe a los huéspedes sobre la falta de shampoo/jabón, ofreciendo disculpas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "B) Reinterpretar los datos del dashboard, enfocándose en las métricas positivas y sugiriendo que las bajas puntuaciones son casos aislados que no representan la calidad general.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Concluir que la caída del NPS es una tendencia general del sector y que no hay acciones correctivas inmediatas que puedan revertir un descontento tan amplio.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_42",
    "department": "Gerencia",
    "title": "Caso de Gerencia #42",
    "description": "Se detecta una rotación de personal del 40% anual en la recepción.",
    "options": [
      {
        "text": "C) Implementar cláusulas de permanencia en los contratos para desalentar las renuncias, sin revisar las condiciones laborales subyacentes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "B) Asignar la tarea de reclutamiento constante al equipo de RRHH, priorizando la velocidad en la cobertura de vacantes sobre la retención a largo plazo del personal existente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_43",
    "department": "Gerencia",
    "title": "Caso de Gerencia #43",
    "description": "El hotel recibe una inspección sorpresa de sanidad en el restaurante y encuentra irregularidades.",
    "options": [
      {
        "text": "C) Solicitar al personal que retire discretamente los productos con fecha de caducidad cercana o sin etiquetar antes de que el inspector llegue a esa sección.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "B) Ofrecer al inspector una cortesía de alojamiento y comidas gratuitas durante su estancia, esperando que influya en su informe.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_44",
    "department": "Gerencia",
    "title": "Caso de Gerencia #44",
    "description": "Un proveedor crítico de software (PMS) anuncia un aumento de precio del",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_45",
    "department": "Gerencia",
    "title": "Caso de Gerencia #45",
    "description": "Resistencia severa del personal operativo ante la implementación de una nueva herramienta de digitalización.",
    "options": [
      {
        "text": "C) Enviar un comunicado interno advirtiendo que la falta de adaptación a la nueva herramienta será motivo de evaluaciones de desempeño negativas y posibles sanciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Delegar la responsabilidad de autoaprendizaje de la herramienta al personal, proporcionando un manual detallado y un canal de soporte técnico para consultas puntuales.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Identificar líderes positivos dentro del staff, realizar capacitaciones prácticas (hands-on) mostrando cómo el sistema les ahorra tiempo real y ofrecer incentivos por uso correcto.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_46",
    "department": "Gerencia",
    "title": "Caso de Gerencia #46",
    "description": "La competencia directa baja sus tarifas un 25% para robar cuota de mercado en temporada baja.",
    "options": [
      {
        "text": "B) Reducir nuestras tarifas en un porcentaje similar al de la competencia para no perder clientes, priorizando la ocupación sobre el ingreso promedio por habitación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Publicar comparaciones de precios y servicios destacando nuestros puntos débiles frente a la competencia, esperando que los clientes reconozcan la diferencia de valor.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Mantener la tarifa pero agregar valor percibido (paquetes con cena, late check-out), y potenciar campañas de marketing segmentadas a la base de datos de Promotores.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_47",
    "department": "Gerencia",
    "title": "Caso de Gerencia #47",
    "description": "Un video de un huésped quejándose de la limpieza se vuelve viral en TikTok/Instagram.",
    "options": [
      {
        "text": "B) Ignorar el video, esperando que el ciclo de noticias de las redes sociales lo haga desaparecer con el tiempo, y evitar cualquier interacción que pueda darle más visibilidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Publicar una respuesta defensiva en los comentarios del video, desacreditando la versión del huésped y enfatizando los altos estándares de limpieza del hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_48",
    "department": "Gerencia",
    "title": "Caso de Gerencia #48",
    "description": "Desvío del 18% en el presupuesto de gastos operativos (GOP) por exceso en consumo de energía.",
    "options": [
      {
        "text": "B) Implementar una política de ahorro energético solicitando al personal que apague las luces de todas las áreas comunes durante el día, sin considerar la experiencia del huésped.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Evaluar la posibilidad de introducir una tarifa de servicio \"ecológica\" a futuro para cubrir el aumento de costos energéticos, sin una justificación clara o notificación previa.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "A) Realizar una auditoría energética con mantenimiento para identificar fugas o equipos ineficientes (calderas, bombas) y establecer un cronograma de apagado de áreas sin uso.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
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
        "text": "C) Posponer indefinidamente cualquier negociación con el sindicato, alegando restricciones presupuestarias y la necesidad de priorizar la operatividad del hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Emitir un comunicado interno minimizando las preocupaciones del sindicato y recordando al personal las consecuencias de una interrupción de las operaciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_50",
    "department": "Front Desk",
    "title": "Caso de Front Desk #50",
    "description": "El propietario del hotel exige recuperar la inversión de capital recortando drásticamente la calidad de los amenities.",
    "options": [
      {
        "text": "B) Sustituir las amenidades actuales por versiones genéricas de menor costo y tamaño, manteniendo una apariencia similar para que el cambio no sea evidente de inmediato.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Aceptar la directriz sin objeciones ni análisis, implementando los recortes de inmediato y esperando que el impacto negativo en la satisfacción del cliente no sea significativo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_51",
    "department": "Front Desk",
    "title": "Caso de Front Desk #51",
    "description": "Llega un grupo de 15 personas (Walk-ins) sin reserva previa a última hora de la noche.",
    "options": [
      {
        "text": "Informar al grupo que, debido a la hora avanzada, el sistema de reservas está cerrado y no es posible procesar un grupo tan grande sin previo aviso.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Ofrecer habitaciones individuales a la tarifa estándar sin aplicar descuentos por volumen, insistiendo en que cada miembro del grupo complete su registro por separado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_52",
    "department": "Front Desk",
    "title": "Caso de Front Desk #52",
    "description": "Huésped corporativo necesita facturación dividida entre la empresa y sus gastos extras personales.",
    "options": [
      {
        "text": "Generar una única factura con todos los cargos a nombre de la empresa, informando al huésped que la división interna es responsabilidad de su departamento contable.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Indicar al huésped que el sistema no permite facturaciones divididas y que deberá abonar el total, pudiendo solicitar un desglose de consumos para su reembolso posterior.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_53",
    "department": "Front Desk",
    "title": "Caso de Front Desk #53",
    "description": "Reclamo de un huésped sobre un objeto de valor no encontrado al retirarse.",
    "options": [
      {
        "text": "A) Ofrecer un descuento en una futura estancia como compensación directa, asumiendo que el objeto está definitivamente perdido, sin realizar una investigación formal.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Indicar al huésped que esperará a ver si el objeto aparece y se comunicará si hay novedades, sin registrar formalmente el incidente en el sistema de objetos perdidos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Registrar la denuncia en la aplicación de gestión de objetos perdidos y, si se encuentra el artículo, generar el documento legal de entrega en formato PDF para formalizar la devolución con seguridad.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_54",
    "department": "Front Desk",
    "title": "Caso de Front Desk #54",
    "description": "Falla en la terminal de pagos (POS) durante el horario pico de salidas.",
    "options": [
      {
        "text": "A) Informar a los huéspedes que, debido a la falla, no se puede procesar el pago en este momento y que se les enviará una factura por correo para que realicen la transferencia bancaria cuando les sea posible.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Solicitar amablemente a los huéspedes que busquen una alternativa de pago externa, como un cajero automático, ya que el sistema del hotel no funciona.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_55",
    "department": "Front Desk",
    "title": "Caso de Front Desk #55",
    "description": "Familia con reserva para dos personas llega con tres niños pequeños sin declarar.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "B) Acceder al late check-out solicitado por el huésped, confiando en que se encontrará una solución para la nueva llegada en el momento, aunque implique una posible demora.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Informar al huésped de manera tajante que el late check-out no es posible bajo ninguna circunstancia, ya que las políticas del hotel establecen una hora fija de salida y la habitación ya tiene una reserva.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_57",
    "department": "Front Desk",
    "title": "Caso de Front Desk #57",
    "description": "Activación de una falsa alarma de incendio en la madrugada.",
    "options": [
      {
        "text": "A) Silenciar la alarma lo más rápido posible y asumir que los huéspedes regresarán a sus habitaciones por sí mismos, sin emitir una comunicación formal sobre la situación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Proceder con la activación inmediata del protocolo completo de emergencia, incluyendo el aviso a los servicios de bomberos, sin una verificación previa o confirmación de la causa.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Silenciar la alarma tras confirmar visualmente que no hay riesgo, utilizar el sistema de megafonía para calmar a los huéspedes, disculparse por el inconveniente y enviar una nota formal por debajo de las puertas a la mañana siguiente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "B) Intentar ignorar la actitud del cliente y continuar con el proceso de check-in de forma normal, esperando que su comportamiento se modere por sí mismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Explicarle firmemente las políticas del hotel respecto al comportamiento de los huéspedes en áreas comunes, pidiéndole que mantenga la calma o se le denegará el servicio.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_59",
    "department": "Front Desk",
    "title": "Caso de Front Desk #59",
    "description": "Error de comunicación: un traslado al aeropuerto reservado por el huésped no fue agendado con la empresa tercerizada.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_60",
    "department": "F&B",
    "title": "Caso de F&B #60",
    "description": "Un pasajero sufre un desmayo en el medio del lobby.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_61",
    "department": "F&B",
    "title": "Caso de F&B #61",
    "description": "Queja de un comensal porque el corte de asado tradicional argentino llegó frío y fuera de su punto de cocción solicitado.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_62",
    "department": "F&B",
    "title": "Caso de F&B #62",
    "description": "Faltan termos y yerba para el servicio de mate en el buffet de desayuno, generando enojo en turistas locales.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_63",
    "department": "F&B",
    "title": "Caso de F&B #63",
    "description": "Un evento corporativo pide extender el servicio de barra libre por dos horas no pactadas en el contrato original.",
    "options": [
      {
        "text": "A) Autorizar la extensión del servicio de barra libre sin realizar ajustes en la facturación, para garantizar la satisfacción del cliente y evitar cualquier posible reclamo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Suspender el servicio de barra libre exactamente a la hora pactada, retirando las botellas y explicando al cliente que el contrato ha finalizado, sin ofrecer alternativas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_64",
    "department": "F&B",
    "title": "Caso de F&B #64",
    "description": "Máquina de café expreso sufre una avería crítica en pleno horario de desayuno.",
    "options": [
      {
        "text": "A) Informar a los clientes en la fila que la máquina está fuera de servicio y que deben esperar a que el técnico la repare, sin ofrecer ninguna alternativa de café.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Ofrecer café instantáneo como única alternativa, sin informar a los clientes sobre la avería de la máquina de espresso ni disculparse por la diferencia en la calidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "B) Intentar desviar la atención de los clientes con ofertas de bebidas o postres de cortesía, esperando que la discusión interna cese por sí misma sin intervención.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Permitir que la discusión continúe, asumiendo que es una parte normal de la dinámica de la cocina y que se resolverá entre ellos, sin que la gerencia intervenga.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_66",
    "department": "F&B",
    "title": "Caso de F&B #66",
    "description": "Contaminación cruzada confirmada: un plato para celíacos se preparó en la misma tabla que un panificado regular.",
    "options": [
      {
        "text": "A) Presentar el plato al comensal asumiendo que la cantidad de gluten transferido es mínima y no causará una reacción, evitando la necesidad de rehacerlo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Retirar cuidadosamente las migas de pan visibles del plato y proceder a servirlo, considerándolo apto después de esta acción superficial.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_67",
    "department": "F&B",
    "title": "Caso de F&B #67",
    "description": "Huésped es sorprendido guardando comida del buffet en tuppers dentro de su mochila.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_68",
    "department": "F&B",
    "title": "Caso de F&B #68",
    "description": "Aparece un insecto en la ensalada de un cliente VIP.",
    "options": [
      {
        "text": "A) Retirar el insecto discretamente del plato y ofrecer al cliente que continúe con la misma ensalada, asegurando que no hay problema alguno.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Explicar al cliente que la presencia de insectos es común en productos frescos y orgánicos, ofreciéndole limpiar el plato para que pueda seguir comiendo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_69",
    "department": "F&B",
    "title": "Caso de F&B #69",
    "description": "Cliente ebrio empieza a acosar a otros comensales en el bar del hotel.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "B) Dejar el aceite rebalsado en su lugar, cubriéndolo con lonas, y esperar que el próximo servicio de recolección se encargue, sin ninguna acción preventiva.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Verter pequeñas cantidades del exceso de aceite en los desagües de servicio, bajo el supuesto de que no causará impacto significativo en el sistema de alcantarillado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "B) Cortar el suministro eléctrico de la sala de servidores únicamente y colocar carteles de advertencia, confiando en que esto será suficiente para evitar daños mayores, sin buscar una solución al problema del agua.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Colocar toallas y cubos para intentar contener el goteo, mientras se espera que el problema se resuelva por sí solo o que el agua deje de salir.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_72",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #72",
    "description": "Falla crítica en el sistema de extracción de humo en la cocina, llenando el restaurante de olor a comida.",
    "options": [
      {
        "text": "A) Usar ambientadores químicos en el salón para intentar enmascarar el olor a comida, sin abordar la causa raíz del problema de extracción.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Abrir algunas ventanas y puertas del restaurante, informando a los clientes que es una medida temporal para ventilar y que el olor desaparecerá con el tiempo, sin detener la operación de la cocina.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Evacuar el humo mediante ventilación forzada cruzada (ventanas/puertas), apagar temporalmente las parrillas/planchas, y reparar los motores de las campanas extractoras en el techo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "B) Indicar al huésped que debe tener cuidado al usar el secador y asegurarse de que sus manos estén completamente secas, asumiendo que el problema es del usuario y no del aparato.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Realizar una reparación superficial con cinta aislante y dejar una nota al huésped, sugiriéndole que no lo use si no se siente seguro, en lugar de reemplazarlo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "B) Intentar ajustar manualmente algunas partes visibles del motor con herramientas básicas, esperando que el ruido disminuya, sin una evaluación técnica adecuada.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Registrar el incidente en el libro de novedades para el próximo turno, asumiendo que el ruido no es grave y que otro compañero se encargará de revisarlo más tarde.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_75",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #75",
    "description": "Falla en la puerta giratoria del acceso principal: se quedó atascada.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_76",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #76",
    "description": "Se reporta una invasión de hormigas y pequeños insectos en el solárium de la piscina.",
    "options": [
      {
        "text": "Notificar al departamento de limpieza para que realice una desinfección superficial con productos de uso general, esperando que sea suficiente para disuadir a los insectos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Informar a los huéspedes que, debido a la política ecológica del hotel, la presencia ocasional de insectos es un indicador de un entorno natural y saludable.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_77",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #77",
    "description": "La cinta de correr principal del gimnasio frena bruscamente mientras un huésped la usa.",
    "options": [
      {
        "text": "Sugerir al huésped que revise las indicaciones de peso máximo del equipo, ya que estas fallas a menudo se relacionan con el uso fuera de especificaciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Informar al huésped que el equipo está en proceso de revisión automática y que puede presentar algunas interrupciones temporales, invitándole a usar otras máquinas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_78",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #78",
    "description": "Atasco severo en el ducto vertical de basura (Shut de basura) bloqueando todos los pisos.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Indicar a los huéspedes que, como medida temporal, ajusten la temperatura deseada considerando una pequeña variación, mientras se programa una revisión técnica sin urgencia.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Iniciar un proceso de solicitud para reemplazar todos los termostatos táctiles de las habitaciones, considerando que una recalibración individual podría ser demasiado compleja y lenta.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_80",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #80",
    "description": "Las luces subacuáticas de la piscina exterior presentan agua dentro del armazón.",
    "options": [
      {
        "text": "Reportar el incidente al departamento de mantenimiento para que evalúe si un sellado superficial con resina podría ser una solución temporal, priorizando la estética.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Mantener el circuito eléctrico activado para no afectar la iluminación nocturna de la piscina, planificando una revisión en horario de menor afluencia.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_81",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #81",
    "description": "Un huésped se retira, y su perro mascota destruyó las patas del sillón de la habitación.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "Ofrecer un analgésico a la mucama y sugerirle que intente completar sus tareas restantes con mayor precaución, recordándole la importancia de la productividad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Considerar una reasignación temporal de la mucama a tareas más ligeras o la asignación de su cuota a otros compañeros, evaluando la posibilidad de sanciones por falta de previsión en su salud.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
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
        "text": "Solicitar amablemente al huésped que espere unos minutos en el pasillo mientras se notifica a la mucama para que realice una limpieza exprés, asegurando que la habitación esté impecable a la brevedad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Aclarar al huésped que el sistema indica la habitación como limpia y que no hay registros de un estado anterior, sugiriendo una posible confusión de su parte.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_84",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #84",
    "description": "Extravío de un manojo de llaves maestras físicas por parte de un supervisor.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_85",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #85",
    "description": "Un huésped encuentra ropa íntima de otra persona olvidada en el cajón de la cómoda.",
    "options": [
      {
        "text": "Coordinar con un miembro del equipo de limpieza para que retire discretamente el artículo, informando al huésped que se ha corregido el 'descuido de un artículo personal anterior'.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Explicar al huésped que, según nuestros registros, la habitación fue revisada exhaustivamente antes de su llegada y que es inusual encontrar tales artículos, quizás sugiriendo un error de identificación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_86",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #86",
    "description": "Rotura del montacargas exclusivo de lavandería, estancando todos los carros de ropa sucia.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_87",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #87",
    "description": "Mezcla occidental de químicos de limpieza (Lavandina + Amoníaco) en el Office del piso, generando vapores tóxicos.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_88",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #88",
    "description": "Derrame profundo de vino tinto en una alfombra persa en el pasillo del piso presidencial.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_89",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #89",
    "description": "Un huésped importante acusa a Housekeeping de haber tirado documentos (sin triturar) que dejó encima del escritorio.",
    "options": [
      {
        "text": "Recordar al huésped que es su responsabilidad asegurar la ubicación de sus documentos importantes, ya que el personal de limpieza solo retira los objetos depositados en la papelera.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informar al huésped que la basura de la habitación ya ha sido depositada en los contenedores generales del hotel, y que lamentablemente no es posible recuperarla una vez mezclada con otros residuos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Entrevistar a la mucama, buscar en la basura de acopio antes de la recolección final por si hubo un error, y recordar la política estricta de \"solo tirar lo que está adentro de la papelera\".",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_90",
    "department": "Gerencia",
    "title": "Caso de Gerencia #90",
    "description": "Falta de personal nocturno para realizar el Turndown Service (servicio de apertura de cama) en la zona VIP.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "RRHH"
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
        "text": "Establecer que las encuestas de papel serán el método principal para el cálculo del NPS, argumentando que el sistema digital es demasiado propenso a errores y requiere demasiada inversión para su corrección.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ajustar manualmente las calificaciones bajas en el sistema para que se clasifiquen como 'Pasivos', con el fin de presentar una imagen más favorable del desempeño a la dirección y evitar alarmas innecesarias.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Implementar un descuento salarial proporcional a la discrepancia de inventario a todo el equipo de alimentos y bebidas, como medida disuasoria para fomentar mayor rigor en la gestión de productos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Realizar ajustes contables en los registros de inventario para que coincidan con las cifras físicas reportadas, justificándolo como una 'depuración de datos' para mejorar la precisión formal.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_93",
    "department": "Gerencia",
    "title": "Caso de Gerencia #93",
    "description": "Ausentismo masivo del personal operativo debido a un paro general de transporte urbano.",
    "options": [
      {
        "text": "Comunicar a los huéspedes que, debido a circunstancias fuera de nuestro control, algunos servicios no estarán disponibles o se verán severamente limitados, invitándolos a ser comprensivos con la situación del personal.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Aplicar la política de 'no show, no pay' a todo el personal afectado por el paro, argumentando la necesidad de mantener la disciplina laboral y los costos operativos bajo control.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Activar el plan de contingencia pre-aprobado: contratar combis privadas (shuttles) para buscar al personal esencial, ofrecer pago extra u horas compensatorias, y los gerentes asisten en tareas operativas básicas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_94",
    "department": "Gerencia",
    "title": "Caso de Gerencia #94",
    "description": "Demanda laboral de un exempleado por presuntas horas extras no registradas ni pagadas.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_95",
    "department": "Gerencia",
    "title": "Caso de Gerencia #95",
    "description": "Caída drástica del RevPAR de una propiedad del grupo frente al presupuesto del primer trimestre.",
    "options": [
      {
        "text": "Anunciar una reducción salarial general del 10% para todo el personal, justificándola como una medida de choque necesaria para alinear los costos operativos con la nueva realidad de ingresos del hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Aumentar significativamente la inversión en campañas de marketing digital en redes sociales, priorizando la visibilidad del hotel para atraer más reservas, sin revisar la estrategia de precios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_96",
    "department": "Gerencia",
    "title": "Caso de Gerencia #96",
    "description": "Auditoría IT revela que la red WiFi de huéspedes tiene vulnerabilidades graves expuestas a hackers.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_97",
    "department": "Gerencia",
    "title": "Caso de Gerencia #97",
    "description": "Una nueva app interna falla en la adopción porque los jefes de área la encuentran poco intuitiva y prefieren el papel.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_98",
    "department": "Gerencia",
    "title": "Caso de Gerencia #98",
    "description": "Propietarios exigen congelar todas las contrataciones (Freeze hiring) para mejorar el EBITDA, asfixiando la operación en temporada alta.",
    "options": [
      {
        "text": "Reorganizar las tareas del personal existente para cubrir las vacantes, promoviendo el concepto de 'flexibilidad y adaptabilidad' ante las necesidades de la empresa, sin contemplar compensación adicional por el aumento de carga laboral.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Implementar un programa de limpieza de habitaciones 'a solicitud' para reducir la carga de trabajo del personal, informando a los huéspedes sobre la iniciativa como parte de una 'política de sostenibilidad y ahorro energético', pero sin ajustar la tarifa.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_99",
    "department": "Gerencia",
    "title": "Caso de Gerencia #99",
    "description": "Fuerte caída en el ranking de TripAdvisor tras un mes de reviews de 2 estrellas enfocadas en fallas de servicio.",
    "options": [
      {
        "text": "Contratar una agencia de marketing digital para generar un volumen alto de reseñas positivas genuinas en TripAdvisor, para contrarrestar el efecto de las críticas negativas, sin abordar directamente las causas de las quejas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Solicitar a TripAdvisor la desactivación temporal del perfil del hotel para realizar 'actualizaciones internas', con la intención de reabrirlo en un futuro con un historial de reseñas renovado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_100",
    "department": "Front Desk",
    "title": "Caso de Front Desk #100",
    "description": "Disconformidad gerencial corporativa porque no se enviaron a tiempo los PDF de actas legales de entrega de objetos en el último contingente.",
    "options": [
      {
        "text": "Informar al corporativo que la demora se debió a problemas logísticos con el servicio de correo externo, ajenos a la operativa interna del hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ajustar las fechas de envío en los registros internos para que reflejen un cumplimiento oportuno de los plazos, justificándolo como una 'corrección administrativa' de la documentación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Revisar el flujo del proceso (workflow) en el sistema Lost & Found para automatizar el envío de los PDFs al momento del check-out de contingentes, y establecer alertas si el archivo queda pendiente de envío.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "Informarle al huésped que el sistema no registra su pago y que, lamentablemente, no podemos entregarle la habitación hasta que se abone el monto total, solicitándole que resuelva el asunto directamente con su agencia.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Requerir el pago de la estadía en el momento, explicando que, sin un registro de pago válido en nuestro sistema, no es posible acceder a la habitación según la política estándar del hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_102",
    "department": "Front Desk",
    "title": "Caso de Front Desk #102",
    "description": "El sistema duplica por error una reserva y el auditor nocturno cobra un \"No- Show\" a la tarjeta del cliente.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_103",
    "department": "Front Desk",
    "title": "Caso de Front Desk #103",
    "description": "Llegada de un menor de edad no acompañado intentando hacer check-in con la tarjeta de crédito de sus padres.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_104",
    "department": "Front Desk",
    "title": "Caso de Front Desk #104",
    "description": "Maletero daña accidentalmente una maleta rígida de lujo al subirla al carro portaequipajes.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_105",
    "department": "Front Desk",
    "title": "Caso de Front Desk #105",
    "description": "Huésped olvida su equipaje de mano en el lobby y desaparece durante horas.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_106",
    "department": "Front Desk",
    "title": "Caso de Front Desk #106",
    "description": "El conserje da indicaciones erróneas y un turista pierde un tour costoso que no es reembolsable.",
    "options": [
      {
        "text": "Indicar al huésped que su queja debe ser formalizada por escrito para que el departamento correspondiente pueda revisarla, lo cual puede tardar algunos días.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Explicar que la información de rutas puede variar y es responsabilidad del huésped verificar los detalles del tour, sugiriendo que contacte directamente a la agencia para posibles soluciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Asumir el error de comunicación, contactar al operador turístico para intentar reprogramar sin costo, y si no es posible, el hotel asume la compensación o paga un transporte privado para que alcancen al grupo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_107",
    "department": "Front Desk",
    "title": "Caso de Front Desk #107",
    "description": "Pasajero intenta pagar el saldo de su cuenta con billetes extranjeros visiblemente rotos, manchados o sellados.",
    "options": [
      {
        "text": "Aceptar los billetes para no causar una incomodidad al huésped y registrarlos, con la expectativa de que puedan ser aceptados por el banco durante el próximo depósito sin mayores inconvenientes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Devolver los billetes al huésped, explicando que no cumplen con los estándares para ser aceptados en la caja del hotel y que debe buscar una casa de cambio externa para obtener divisa en buen estado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informar cortésmente que las políticas bancarias locales o casas de cambio no aceptan billetes deteriorados, utilizar el detector de billetes falsos, y solicitar otra forma de pago u otros billetes en buen estado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_108",
    "department": "Front Desk",
    "title": "Caso de Front Desk #108",
    "description": "Llega un paquete de paquetería urgente para un huésped que hizo check-out el día anterior.",
    "options": [
      {
        "text": "Informar al servicio de paquetería que el destinatario ya no se encuentra alojado en el hotel, por lo que no podemos recibir el paquete y debe ser devuelto a su origen.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Guardar el paquete en el área de objetos perdidos y encontrados, y esperar que el huésped se contacte si lo considera importante, ya que el hotel no se hace responsable de paquetes recibidos tras el check-out.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Recibir el paquete, registrarlo en el sistema, contactar al huésped por teléfono/email para avisarle, y coordinar el reenvío a su domicilio a cobro revertido o guardarlo hasta que un conocido pase a buscarlo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_109",
    "department": "Front Desk",
    "title": "Caso de Front Desk #109",
    "description": "Corte de energía interrumpe específicamente la terminal codificadora de llaves magnéticas (Keycard Encoder).",
    "options": [
      {
        "text": "Informar a los huéspedes sobre la falla técnica y pedirles que sean pacientes mientras se restablece el servicio, sugiriendo que lleven consigo sus objetos de valor si planean salir de la habitación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Comunicar que hay una interrupción temporal del servicio de codificación de llaves y que los huéspedes deberán esperar en el lobby hasta que el equipo técnico logre restaurar la funcionalidad del sistema.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_110",
    "department": "F&B",
    "title": "Caso de F&B #110",
    "description": "VIP exige ingresar a su habitación a las 8:00 AM, pero el sistema PMS ya ejecutó la auditoría nocturna.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "Aceptar la entrega para evitar fricciones con el proveedor y ubicar la carne en el freezer, con la expectativa de que el enfriamiento rápido mitigue cualquier problema de temperatura.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Procesar la carne rápidamente y utilizarla en la preparación de platillos que se cocinarán a altas temperaturas, confiando en que esto eliminará cualquier riesgo potencial para la salud.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_112",
    "department": "F&B",
    "title": "Caso de F&B #112",
    "description": "Mesa de 10 personas exige dividir la cuenta ítem por ítem en pleno pico de servicio nocturno.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_113",
    "department": "F&B",
    "title": "Caso de F&B #113",
    "description": "El barril de cerveza artesanal se queda vacío a mitad de servir una pinta, y el de repuesto no está frío.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_114",
    "department": "F&B",
    "title": "Caso de F&B #114",
    "description": "Cliente reclama que su cóctel está \"aguado\" y exige la devolución de su dinero.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_115",
    "department": "F&B",
    "title": "Caso de F&B #115",
    "description": "La impresora de comandas de la cocina se queda sin papel y se pierden tres pedidos.",
    "options": [
      {
        "text": "Explicar a los clientes que la cocina está experimentando un volumen inusualmente alto de pedidos, lo que está causando una demora general en el servicio, sin ofrecer una solución específica.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Asumir que el equipo de cocina está al tanto de la situación y que resolverá la demora a su debido tiempo, continuando con las demás tareas y esperando una notificación de su parte.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "El \"expediter\" o camarero líder nota la demora, verifica verbalmente con el chef las mesas faltantes, reimprime las comandas desde el salón, prioriza su cocción y ofrece un aperitivo a las mesas afectadas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_116",
    "department": "F&B",
    "title": "Caso de F&B #116",
    "description": "Camarero agrega un 15% de propina al cobro con tarjeta sin la autorización explícita del cliente.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_117",
    "department": "F&B",
    "title": "Caso de F&B #117",
    "description": "Un niño tropieza y rompe un vaso de vidrio cerca de las bandejas del buffet.",
    "options": [
      {
        "text": "Pedir a los padres que se hagan cargo de la limpieza del área para evitar que el personal se distraiga de sus funciones principales, informándoles sobre el costo de reposición del vaso.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Limpiar únicamente los fragmentos de vidrio visibles del suelo, dejando el buffet en su lugar para no interrumpir el flujo de clientes, asumiendo que el riesgo es mínimo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Frenar el servicio en esa zona, verificar que el niño esté bien, retirar toda la comida abierta cercana por riesgo de esquirlas de vidrio, barrer y aspirar exhaustivamente, y reponer alimentos nuevos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_118",
    "department": "F&B",
    "title": "Caso de F&B #118",
    "description": "El inspector de sanidad municipal exige ver las planillas de temperaturas de las cámaras frigoríficas, y no están completas.",
    "options": [
      {
        "text": "Explicar al inspector que el personal ha estado muy ocupado y que las planillas se completarán a la brevedad, solicitando una extensión de plazo para presentarlas en buen orden.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Proceder a rellenar las planillas con fechas y valores estimados de los días anteriores, justificando que la omisión fue un descuido puntual y que los registros son un mero formalismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Asumir la falta administrativa ante el inspector, recibir el acta de apercibimiento, y el Chef Ejecutivo debe implementar esa misma tarde un control estricto cruzado entre turnos para regularizar la métrica.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "Asignarle una mesa prioritaria al 'influencer' y ofrecerle un plato de cortesía o un descuento significativo, esperando que esto asegure una reseña positiva en sus redes sociales.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informarle de manera tajante que el hotel no trabaja con 'influencers' y que debe respetar las normas como cualquier otro cliente, negándole cualquier atención especial o cortesía.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_120",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #120",
    "description": "Pedido de Room Service se entrega en una habitación equivocada y el huésped erróneo empieza a consumirlo.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_121",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #121",
    "description": "La bomba principal de agua pierde presión, dejando las duchas de los últimos pisos sin fuerza.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_122",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #122",
    "description": "Un huésped reporta que se le cayó un anillo de compromiso por el desagüe del lavamanos.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_123",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #123",
    "description": "El portón automático del estacionamiento se traba, dejando a 5 autos sin poder salir hacia el aeropuerto.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_124",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #124",
    "description": "Desprendimiento de pintura y manchas de humedad/moho en el pasillo adyacente a la zona de saunas.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_125",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #125",
    "description": "Auditoría interna detecta que los extintores de la cocina principal tienen las obleas vencidas.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_126",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #126",
    "description": "Una tormenta fuerte con granizo rompe el ventanal de una habitación desocupada.",
    "options": [
      {
        "text": "Esperar a que el departamento de finanzas apruebe el presupuesto para un nuevo cristal antes de tomar cualquier medida, ya que no hay huéspedes afectados directamente en la habitación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Cubrir el ventanal roto con una lona impermeable, asegurándola precariamente con cinta adhesiva, como una solución temporal hasta que se pueda adquirir el repuesto en los próximos días.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_127",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #127",
    "description": "El sistema centralizado de calefacción no se detiene en un día inusualmente caluroso de otoño.",
    "options": [
      {
        "text": "Desconectar los termostatos de las habitaciones individualmente y pedir a los huéspedes que ajusten la temperatura abriendo las ventanas, mientras se programa una revisión más exhaustiva del sistema para la próxima semana.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Informar a los huéspedes que la calefacción está en un ciclo de recalibración y que la temperatura se normalizará pronto, sugiriendo que abran las ventanas para ventilar si sienten calor excesivo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_128",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #128",
    "description": "Falla el temporizador (timer) de las luces del jardín, dejando la fachada a oscuras toda la noche.",
    "options": [
      {
        "text": "Ignorar la situación por esa noche, asumiendo que el temporizador se reiniciará solo con el próximo ciclo o que la oscuridad total no representará un problema de seguridad significativo para el hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Colocar algunas luces portátiles en el jardín para ofrecer una iluminación mínima, notificando al personal que la reparación del sistema de temporización se agendará para el horario diurno más conveniente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_129",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #129",
    "description": "Huésped no recuerda la clave de su caja fuerte y su pasaporte está adentro, faltando 1 hora para su vuelo.",
    "options": [
      {
        "text": "Indicar al huésped que, por seguridad, el hotel no puede abrir cajas fuertes sin la presencia de un especialista externo, cuya disponibilidad puede ser limitada, y que debe esperar hasta el siguiente día hábil.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Intentar adivinar combinaciones comunes o forzar la cerradura con herramientas básicas, esperando tener éxito rápidamente para evitar que el huésped pierda su vuelo, aunque esto pueda dañar la caja fuerte.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "El gerente de guardia y seguridad deben acudir a la habitación con el dispositivo de anulación electrónica (CEU), verificar la identidad del pasajero de forma rigurosa, abrir la caja frente a él y firmar el registro.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_130",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #130",
    "description": "Olor nauseabundo proveniente de la trampa de grasa de la cocina invade el comedor.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_131",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #131",
    "description": "Una mucama encuentra un arma de fuego no declarada en la mesa de luz durante la limpieza diaria.",
    "options": [
      {
        "text": "Avisar a la supervisora del hallazgo, quien instruirá a la mucama para que no toque el objeto y deje una nota al huésped, solicitándole que resguarde sus pertenencias de forma más discreta.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Mantener el arma en la habitación y reportar el objeto como una \"pertenencia inusual\" en el registro de limpieza, confiando en que el huésped la retirará al momento de su check-out.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Detener la limpieza inmediatamente, no tocar el objeto, abandonar la habitación cerrando con llave, y avisar de urgencia a seguridad/gerencia para que contacten a la policía y apliquen el protocolo legal local.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_132",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #132",
    "description": "Lavadora industrial se descompone a mitad del ciclo dejando sábanas empapadas y sucias.",
    "options": [
      {
        "text": "Reportar la falla al técnico, dejando las sábanas en la máquina mientras se espera su llegada, sin considerar otras opciones inmediatas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Trasladar las sábanas a otra máquina sin verificar su disponibilidad, causando una congestión en el flujo de trabajo de lavandería.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Transferir las sábanas mojadas a otra máquina disponible, derivar el excedente a un servicio de lavandería externo de contingencia y reportar el código de error de la máquina al servicio técnico.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Indicarle amablemente al huésped que la política del hotel considera desecho cualquier objeto no guardado, lamentando la situación pero sin ofrecer una solución activa.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ofrecer una disculpa genérica y un cupón para una bebida de cortesía, sin investigar la posibilidad de recuperar el objeto o comprender el valor sentimental para el huésped.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_134",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #134",
    "description": "Falta de uniformes de recambio genera que el personal de piso use prendas rotas o manchadas de lavandina.",
    "options": [
      {
        "text": "Solicitar a los empleados que busquen soluciones temporales con sus propias prendas o que utilicen los uniformes disponibles, aunque no estén en perfectas condiciones, mientras se evalúa una compra.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Reportar la situación al departamento de Recursos Humanos para que investiguen posibles faltas del personal en el cuidado de uniformes, sin considerar la falta de stock como causa principal.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_135",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #135",
    "description": "Toallas blancas de felpa severamente manchadas con tinte de pelo negro por una pasajera.",
    "options": [
      {
        "text": "Desechar inmediatamente las toallas manchadas sin intentar ningún proceso de recuperación ni evaluar la causa de la mancha.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Informar a la supervisión y esperar instrucciones sin tomar ninguna medida inmediata para aislar o tratar la lencería.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_136",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #136",
    "description": "Una aspiradora en cortocircuito hace saltar la térmica, dejando sin luz a todo un pasillo de habitaciones.",
    "options": [
      {
        "text": "Esperar pasivamente a que el departamento de mantenimiento se dé cuenta del problema por sí mismo o reciba reportes de huéspedes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Intentar reiniciar el disyuntor varias veces sin identificar la causa del cortocircuito, arriesgándose a nuevas interrupciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_137",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #137",
    "description": "El carro de limpieza rueda por una pendiente leve y raya profundamente la puerta de madera de una Suite.",
    "options": [
      {
        "text": "Reportar el incidente solo a la mucama encargada del piso, esperando que ella decida cómo proceder con el daño.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Culpar al huésped de adentro por abrir la puerta de golpe.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informar del daño a supervisión y mantenimiento para programar el pulido o masillado de la puerta, e instalar cuñas o trabas de freno más efectivas en las ruedas de todos los carros del hotel.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_138",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #138",
    "description": "Queja por olor insoportable en una habitación limpia; se descubre un pañal sucio escondido detrás del televisor.",
    "options": [
      {
        "text": "Remover el pañal y rociar el ambiente con un aromatizante estándar, sin realizar una limpieza profunda ni abordar el origen del olor.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Presentar una nota en la bitácora de limpieza para que el turno siguiente se encargue de la situación, sin intervenir de inmediato.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Retirar el objeto, realizar una limpieza profunda con desinfectantes enzimáticos, utilizar un ozonizador para neutralizar el ambiente y pedir disculpas al huésped actual por la omisión de la mucama anterior.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_139",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #139",
    "description": "Mucama finaliza la limpieza pero olvida cerrar la puerta, dejando la habitación expuesta por horas con objetos de valor dentro.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_140",
    "department": "Gerencia",
    "title": "Caso de Gerencia #140",
    "description": "VIP con asma solicita almohadas hipoalergénicas, pero no hay stock en la ropería central.",
    "options": [
      {
        "text": "Informar al huésped que actualmente no se dispone de stock de almohadas hipoalergénicas y que se hará un pedido, sin ofrecer una solución inmediata o alternativa.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Trasladar al huésped a otra habitación que sí tenga almohadas hipoalergénicas, sin verificar si dicha habitación está disponible o si es de la misma categoría.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Realizar una compra de emergencia (caja chica) en una tienda blanca local cercana, enfundarlas y entregarlas rápidamente, garantizando la salud respiratoria y el descanso del huésped.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_141",
    "department": "Gerencia",
    "title": "Caso de Gerencia #141",
    "description": "El dashboard de gestión interno arroja un Error 500 al procesar las encuestas del mes, impidiendo ver las métricas clave.",
    "options": [
      {
        "text": "Esperar a que el equipo de soporte técnico responda a la solicitud de forma programada, sin explorar métodos alternativos para acceder a la información crucial durante el período de inactividad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Solicitar a los empleados que ingresen manualmente los datos de las encuestas en una hoja de cálculo para generar reportes, creando una carga de trabajo innecesaria y propensa a errores.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Ofrecer una leve mejora en el salario sin considerar un paquete de beneficios completo o un plan de carrera, resultando en una oferta poco competitiva.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Aceptar la partida de los chefs y comenzar inmediatamente un proceso de reclutamiento externo, sin intentar retenerlos ni entender sus motivaciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_143",
    "department": "Gerencia",
    "title": "Caso de Gerencia #143",
    "description": "La matriz corporativa impone un recorte de presupuesto del 15% a mitad de temporada alta sin previo aviso.",
    "options": [
      {
        "text": "Implementar recortes indiscriminados en todas las áreas, incluyendo aquellas que impactan directamente la experiencia del huésped (ej. reducir amenities), sin una evaluación estratégica.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Comunicar el recorte al personal y solicitarles que propongan medidas de ahorro individual, sin una estrategia de gerencia clara o apoyo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_144",
    "department": "Gerencia",
    "title": "Caso de Gerencia #144",
    "description": "La cuenta de Instagram del hotel sufre un hackeo y se publican estafas de criptomonedas a los seguidores.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_145",
    "department": "Gerencia",
    "title": "Caso de Gerencia #145",
    "description": "Un proveedor clave de lavandería retiene la entrega de blancos porque contaduría adeuda tres facturas.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Financiero"
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
        "text": "Disculparse profusamente con el huésped, prometiendo una suite de cortesía y un servicio de spa gratuito, sin documentar formalmente el incidente ni derivarlo a los canales legales correspondientes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ignorar la amenaza de demanda, asumiendo que el huésped solo busca un trato preferencial y que no tomará acciones legales.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_147",
    "department": "Gerencia",
    "title": "Caso de Gerencia #147",
    "description": "Falla en la integración (API) entre el Channel Manager y el motor de reservas, generando múltiples sobreventas (Overbooking).",
    "options": [
      {
        "text": "Comunicar a los huéspedes afectados que su reserva ha sido cancelada debido a un problema técnico, sin ofrecer alternativas ni compensación alguna.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Reasignar a los huéspedes a habitaciones de categoría inferior en el mismo hotel sin previo aviso ni compensación, esperando que acepten la situación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_148",
    "department": "Gerencia",
    "title": "Caso de Gerencia #148",
    "description": "Una encuesta de clima laboral anónima revela maltrato sistémico y acoso por parte del Jefe de Mantenimiento.",
    "options": [
      {
        "text": "Realizar una reunión con todo el equipo de mantenimiento para recordarles las políticas de respeto y acoso, sin investigar el caso específico ni proteger la confidencialidad de los quejosos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Transferir al Jefe de Mantenimiento a otro departamento con menos personal a su cargo, sin abordar la raíz del problema ni realizar una investigación formal.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
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
        "text": "Publicar un aviso genérico en el sitio web del hotel sobre las obras, asumiendo que todos los huéspedes lo leerán antes de su llegada, sin comunicación directa.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Esperar a que los huéspedes pregunten por las obras al llegar, para luego ofrecerles las disculpas y alguna indicación, en lugar de una solución proactiva.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
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
        "text": "Informarles que el departamento de TI está al tanto de la situación y que se están realizando mejoras generales en la infraestructura, solicitando paciencia hasta la próxima fase de actualización.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Sugerir a los organizadores del evento que consideren el uso de módems móviles personales como una solución provisional, dado que el Wi-Fi del hotel es un servicio compartido para todos los huéspedes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "Asignarle una habitación estándar disponible sin mayores explicaciones, indicando que es la única opción y que la habitación solicitada no está en condiciones de ser ofrecida.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informarle que la habitación deseada está fuera de servicio por motivos técnicos no especificables y que, por política, solo podemos ofrecerle una alternativa de la categoría reservada originalmente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_152",
    "department": "Front Desk",
    "title": "Caso de Front Desk #152",
    "description": "Se recibe un pago con tarjeta de crédito que la terminal POS arroja como \"Robada / Retener Tarjeta\".",
    "options": [
      {
        "text": "Solicitar al cliente, de forma un tanto brusca, una tarjeta de crédito diferente o efectivo, sin dar mayores explicaciones sobre el rechazo de la tarjeta inicial.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Devolver la tarjeta al cliente con una explicación vaga sobre 'problemas técnicos del sistema' y pedirle que intente con otra tarjeta o método de pago.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Actuar con discreción, retener la tarjeta si es seguro hacerlo, solicitar otra forma de pago o identificación, y avisar a seguridad sin confrontar directamente al cliente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
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
        "text": "Ofrecer subir a personal de housekeeping para 'juntar' las camas individuales, asegurando que se verá como una cama matrimonial, sin ofrecer una reubicación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Explicar que el sistema de asignación es automático y que, lamentablemente, no hay disponibilidad para cambios de cama en este momento, sugiriendo que se adapten a la configuración actual.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_154",
    "department": "Front Desk",
    "title": "Caso de Front Desk #154",
    "description": "Huésped extranjero llega sin sello de ingreso al país y la policía migratoria lo busca en el hotel.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_155",
    "department": "Front Desk",
    "title": "Caso de Front Desk #155",
    "description": "Se agotan los paraguas de cortesía en un día de lluvia torrencial y los huéspedes exigen salir.",
    "options": [
      {
        "text": "Informar a los huéspedes que, debido a la alta demanda por la lluvia inesperada, los paraguas de cortesía se han agotado y que deben esperar a que la lluvia cese o conseguir un paraguas por sus propios medios.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ofrecer a los huéspedes interesados en salir una lista de tiendas cercanas donde podrían adquirir paraguas, dado que el hotel no tiene más disponibles para préstamo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Llamar a taxis para que recojan a los huéspedes directamente en la marquesina cubierta y enviar urgentemente al personal de compras por un lote nuevo de paraguas descartables económicos para salvar la jornada.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "Permitir el ingreso de la mascota exótica en la habitación, pero advirtiendo discretamente al huésped que debe mantenerla oculta y evitar que cause cualquier tipo de molestia o alteración a otros huéspedes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Indicar al huésped que la política es estricta y que, si desea hospedarse, debe dejar la mascota en una residencia temporal fuera del hotel, sin ofrecer asistencia para encontrarla.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "Ofrecerles la opción de comprar bebidas y snacks del minibar del lobby a los precios habituales, ya que el servicio de cortesía solo aplica para huéspedes alojados.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Indicarles que el lobby no está diseñado para esperas prolongadas y sugerirles que se organicen para encontrar un lugar más cómodo o que esperen en las inmediaciones del hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_158",
    "department": "Front Desk",
    "title": "Caso de Front Desk #158",
    "description": "Huésped reporta que clonaron su tarjeta durante su estadía y culpa abiertamente al recepcionista.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_159",
    "department": "Front Desk",
    "title": "Caso de Front Desk #159",
    "description": "Falla la impresora fiscal al momento de emitir la factura a un cliente corporativo que se va urgente al aeropuerto.",
    "options": [
      {
        "text": "Informar al cliente que la factura solo puede ser emitida una vez que el sistema esté operativo y que deberá esperar hasta entonces, ya que no hay un procedimiento alternativo de facturación inmediata.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Comunicar al cliente que, debido a la falla técnica, no es posible generar ningún tipo de comprobante en este momento y que deberá contactar al departamento de contabilidad posteriormente para resolver su situación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Emitir un recibo provisorio manual con sello del hotel, anotar sus datos fiscales y correo electrónico, garantizando el envío de la factura electrónica en PDF (facturación en la nube) dentro de las 24 hs.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_160",
    "department": "F&B",
    "title": "Caso de F&B #160",
    "description": "Llega un arreglo floral inmenso y anónimo para un huésped que exigió privacidad estricta (Incógnito).",
    "options": [
      {
        "text": "Mantener el arreglo floral en el mostrador de recepción, asumiendo que el remitente se comunicará si el destinatario no lo reclama y que eventualmente se podrá preguntar a la gerencia qué hacer con él.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Instruir al personal de seguridad para que suba el arreglo floral directamente a la habitación del huésped, asumiendo que la entrega de un regalo no anónimo anula la solicitud de privacidad estricta.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Recibir el paquete en la trastienda, contactar a la habitación por vía telefónica interna consultando si espera una entrega y respetar su decisión de aceptarlo o rechazarlo por seguridad.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_161",
    "department": "F&B",
    "title": "Caso de F&B #161",
    "description": "Se derrama una olla de sopa de 20 litros en el suelo de la cocina en pleno despacho de cenas.",
    "options": [
      {
        "text": "Pedir al personal de limpieza que traiga inmediatamente los trapos y la fregona para limpiar el derrame, mientras los cocineros continúan el servicio con cautela alrededor del área afectada.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Reprimir al cocinero responsable del derrame y exigirle que se encargue personalmente de la limpieza exhaustiva del área, demorando su reincorporación a la línea de cocina hasta que finalice.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_162",
    "department": "F&B",
    "title": "Caso de F&B #162",
    "description": "Cliente acusa intoxicación alimentaria un día después de haber comido mariscos en el restaurante.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "Aprovechar los panificados aplastados o humedecidos utilizándolos para tostadas o en la preparación de rellenos, tratando de disimular los defectos evidentes en el buffet.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informar a los clientes en el buffet que 'por un imprevisto con el proveedor', la variedad de pan será limitada esta mañana, sin ofrecer una solución activa para cubrir la deficiencia.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "Retirar la bebida discretamente si nadie se ha dado cuenta, y esperar que los padres no noten el error, evitando confrontaciones y reemplazándola por una bebida sin alcohol sin mencionar lo ocurrido.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Explicar a los padres que el niño especificó la bebida alcohólica y que el mesero asumió que la orden era correcta, sugiriendo que deben supervisar mejor las elecciones de sus hijos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_165",
    "department": "F&B",
    "title": "Caso de F&B #165",
    "description": "Cliente pide un vino premium y al descorcharlo el sommelier nota que huele a humedad (enfermedad del corcho / TCA).",
    "options": [
      {
        "text": "Decantar el vino en otra botella para airearlo intensamente y servirlo, esperando que la 'aireación' mejore el aroma y que el cliente no detecte el defecto.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informar al cliente que la política del establecimiento no permite reemplazar botellas una vez abiertas y que, si desea otro vino, deberá ordenar y pagar una nueva botella.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "El sommelier debe disculparse, retirar la botella defectuosa, traer una nueva de la misma añada/etiqueta y abrirla con copas limpias frente al cliente para validar la correcta oxigenación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_166",
    "department": "F&B",
    "title": "Caso de F&B #166",
    "description": "El hielo de las máquinas expendedoras o del bar sale con pequeñas partículas negras de suciedad.",
    "options": [
      {
        "text": "Servir el hielo con cautela, buscando los cubos menos afectados y asegurando al cliente que las partículas son 'minerales naturales' del agua o 'pequeñas impurezas inofensivas' del filtro.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Instruir al personal a pasar el hielo por un colador antes de servirlo, con la creencia de que esto eliminará las partículas visibles y hará el hielo apto para el consumo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Frenar el uso del hielo de esa máquina al instante, vaciar la tolva, solicitar hielo embolsado comercial de contingencia y programar con mantenimiento una limpieza de filtros de agua y sanitización del equipo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Marcar la zona del derrame con una silla invertida y pedir a los clientes que circulen con precaución mientras se espera que el personal de limpieza habitual esté disponible para retirar los escombros.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Exigir a los camareros que se disculpen públicamente por la interrupción y que, entre los dos, recojan los fragmentos de la vajilla rota, haciendo un recuento para evaluar los costos de reposición.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "Informar al huésped que, lamentablemente, no podemos procesar su pescado debido a políticas internas de control de calidad y trazabilidad, sugiriéndole alternativas del menú.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Consultar con el jefe de cocina si sería posible hacer una excepción especial y cocinar el pescado fuera del horario de servicio para evitar inconvenientes en la operación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "Indicar al personal de sala que se disculpe con los comensales por la demora, mientras se espera la solución del equipo de IT para no comprometer el servicio.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Recomendar a los camareros que tomen nota de los pedidos en sus blocs personales hasta que se restablezca el sistema, priorizando la entrega de los platos ya comandados.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Solicitar al personal de sala que acompañe discretamente al huésped a una zona más privada del hotel, como su habitación, mientras se evalúa la situación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ofrecerle un café azucarado o una pieza de fruta de nuestro menú, sugiriendo que podría ayudar a estabilizarse mientras consulta a un médico.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_171",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #171",
    "description": "Inodoro de una habitación VIP se desborda continuamente y el agua residual llega a la alfombra.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Colocar un cartel de 'Peligro, Vidrio Roto' y esperar al turno de mantenimiento para que evalúe la situación durante la siguiente inspección programada.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Intentar cubrir provisionalmente la abertura con materiales disponibles, como lonas o cortinas gruesas, para mitigar la entrada de viento y lluvia hasta que llegue un especialista.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_173",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #173",
    "description": "Los paneles solares térmicos del techo dejan de calentar el agua de la piscina climatizada en pleno invierno.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_174",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #174",
    "description": "Olor constante a gas refrigerante escapando de los ductos del aire acondicionado central.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_175",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #175",
    "description": "Se rompe la bisagra hidráulica de la puerta principal de la cocina, y queda abierta de par en par.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_176",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #176",
    "description": "Las bombas dosificadoras de cloro del spa inyectan químicos en exceso por una falla en el sensor electrónico.",
    "options": [
      {
        "text": "Aplicar un producto 'neutralizador de pH' de uso común en piscinas, esperando que contrarreste el exceso de cloro y permita la reapertura rápida del spa.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informar a los clientes sobre una posible ligera irritación debido a un ajuste químico reciente, pero permitiendo el uso del spa bajo su propio criterio.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Detener las bombas, cerrar el acceso al spa, testear los niveles manualmente (reactivo DPD), forzar el vaciado parcial y llenado con agua limpia hasta estabilizar el cloro libre (1.5 - 3.0 ppm).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_177",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #177",
    "description": "La alarma de monóxido de carbono suena insistentemente en el estacionamiento subterráneo.",
    "options": [
      {
        "text": "Desactivar temporalmente la alarma para evitar molestias a los huéspedes y al personal, y posteriormente investigar la causa de la activación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Proceder a ventilar manualmente el área del estacionamiento abriendo las compuertas de aireación, mientras se busca la fuente del problema para solucionarlo directamente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Evacuar el subsuelo inmediatamente, encender manualmente al 100% los extractores forzados de aire, verificar que no haya vehículos en marcha y solicitar a los bomberos que midan el aire antes de reingresar.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "Colocar toallas y cubos estratégicamente para recoger el goteo y mitigar el daño inmediato, mientras se gestiona la reparación con el proveedor externo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Desactivar temporalmente el sistema de sprinklers en todo el hotel para evitar más goteos y posibles daños, y luego evaluar la magnitud de la falla.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Informar a la gerencia sobre la imposibilidad de subir los insumos a tiempo y esperar instrucciones sobre cómo proceder, considerando un posible retraso en el servicio.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pedir al personal disponible que colabore subiendo los insumos de menor peso por las escaleras de servicio, mientras se espera la reparación del montacargas para los artículos más pesados.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_180",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #180",
    "description": "Un ave queda atrapada en los conductos de ventilación generando aleteos y quejas de los huéspedes.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_181",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #181",
    "description": "Se descubre que una habitación no bloqueada fue usada clandestinamente por personal para dormir.",
    "options": [
      {
        "text": "Realizar un reporte interno del incidente y notificar al departamento de Recursos Humanos para que apliquen la sanción administrativa correspondiente, priorizando la discreción del caso.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Asegurarse de que la habitación esté impecable y lista para el siguiente huésped, sin necesidad de reportar el incidente si no hay daños visibles.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_182",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #182",
    "description": "Huésped reporta un sarpullido severo y acusa al detergente industrial usado en las sábanas del hotel.",
    "options": [
      {
        "text": "Asegurar al huésped que nuestros productos son hipoalergénicos y de alta calidad, sugiriendo que podría ser una reacción a algo externo al hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Recomendar al huésped que utilice su propia ropa de cama si la tuviera, o que se ponga en contacto con su médico personal para un diagnóstico preciso.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_183",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #183",
    "description": "Faltante de 20 almohadas de plumas tras el check-out de un grupo escolar o deportivo.",
    "options": [
      {
        "text": "Reasignar almohadas de habitaciones vacías o en mantenimiento para cubrir la demanda inmediata, y luego hacer un pedido para reponer el stock a largo plazo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Consultar con la gerencia la posibilidad de aplicar un cargo al grupo por posibles artículos extraviados, documentando la situación antes de tomar cualquier medida.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Generar el cargo automático por faltante de inventario a la tarjeta en garantía del coordinador del grupo, informarle del hurto con pruebas, y reponer el stock desde bodega central.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_184",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #184",
    "description": "Mucama encuentra envases de medicamentos controlados abiertos y al alcance en una habitación con niños pequeños.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_185",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #185",
    "description": "El ducto de recolección de ropa sucia (shut de lencería) se traba completamente entre dos pisos.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_186",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #186",
    "description": "El proveedor entrega envases de químicos a granel sin etiquetas de seguridad y de colores dudosos.",
    "options": [
      {
        "text": "Identificar los químicos basándose en el historial de pedidos y la experiencia del personal, y luego etiquetarlos provisionalmente para su uso inmediato.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Almacenar los envases sin etiquetar en un área designada y esperar la próxima entrega del proveedor para verificar si corresponden con algún pedido pendiente, usándolos si coinciden visualmente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Poner los químicos en cuarentena, no utilizarlos, exigir al proveedor las hojas de datos de seguridad (MSDS) correspondientes y el etiquetado reglamentario antes de fraccionarlos al personal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_187",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #187",
    "description": "Huésped mancha la pared empapelada de la habitación con pomada negra al lustrar sus zapatos contra el zócalo.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_188",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #188",
    "description": "Carro de limpieza rueda y daña un valioso jarrón decorativo del pasillo de la suite presidencial.",
    "options": [
      {
        "text": "Recoger cuidadosamente los fragmentos y desecharlos discretamente para evitar riesgos, y considerar la posibilidad de reemplazar el jarrón con un modelo similar sin generar un reporte formal.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Intentar una reparación básica del jarrón con adhesivo disponible para restaurar su apariencia, con la esperanza de que pase desapercibido y no requiera un informe de daños.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Recoger los fragmentos con cuidado, reportar la rotura a la gerencia de inmediato para su baja contable, y evaluar la reubicación de adornos frágiles fuera de las rutas de tránsito pesado de los carros.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_189",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #189",
    "description": "Mucama sufre un corte en la mano al recoger vidrios de una botella rota que un huésped escondió adrede bajo la cama.",
    "options": [
      {
        "text": "Aplicar un vendaje menor a la mucama y solicitarle que continúe con sus tareas, indicándole que tenga más precaución la próxima vez.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Recordar a la mucama la importancia de la revisión visual completa de la habitación antes de la limpieza para evitar este tipo de incidentes, y documentar el evento para registro interno.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Derivar a la mucama a emergencias por ART, registrar el accidente laboral, aplicar la limpieza segura con escobillas de mango largo, y multar al huésped por negligencia y riesgo al personal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_190",
    "department": "Gerencia",
    "title": "Caso de Gerencia #190",
    "description": "Faltante masivo de papel higiénico en el depósito general del piso por error de inventario del fin de semana.",
    "options": [
      {
        "text": "Informar a los huéspedes en recepción que, debido a un imprevisto con el suministro, el papel higiénico se entregará bajo solicitud específica mientras se resuelve el problema de stock.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Utilizar los rollos de papel higiénico de menor gramaje o de marcas genéricas de emergencia que se tienen en almacén para suplir la escasez, priorizando las habitaciones ocupadas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Hacer un cruce de stock retirando rollos extra de los pisos de baja ocupación (canibalización temporal) o comprar de urgencia en un comercio mayorista local para garantizar el estándar mínimo por cuarto.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_191",
    "department": "Gerencia",
    "title": "Caso de Gerencia #191",
    "description": "El gerente comercial firma un contrato con una OTA (Agencia Online) que incluye cláusulas de paridad abusivas, bloqueando la venta directa.",
    "options": [
      {
        "text": "Elevar la consulta al departamento legal para una revisión exhaustiva sin tomar acciones inmediatas, mientras se mantiene el status quo de la relación con la OTA.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Aceptar las condiciones impuestas por la OTA, priorizando la paz con el socio comercial y la evitación de futuras fricciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Revisar legalmente el contrato para anular esa cláusula, lanzar promociones encubiertas en la web propia (códigos promocionales, paquetes de valor añadido) que no rompan la tarifa pública pero ofrezcan más beneficios.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
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
        "text": "Priorizar la continuidad de la operación para minimizar pérdidas económicas, informando a los huéspedes sobre la situación y pidiéndoles que permanezcan en sus habitaciones por su seguridad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Delegar la responsabilidad de la gestión de la emergencia al personal de turno, confiando en su capacidad para manejar la situación según los protocolos básicos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_193",
    "department": "Gerencia",
    "title": "Caso de Gerencia #193",
    "description": "Caída drástica del 30% en el ratio de ocupación mensual sin motivos de estacionalidad aparente en el mercado.",
    "options": [
      {
        "text": "Lanzar inmediatamente una campaña agresiva de descuentos generalizados para impulsar la ocupación, sin un análisis previo del impacto en la percepción de valor de la marca.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Concluir que la baja en la ocupación se debe a factores macroeconómicos o tendencias de viaje globales, y esperar a que la situación mejore por sí misma.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_194",
    "department": "Gerencia",
    "title": "Caso de Gerencia #194",
    "description": "Conflicto severo entre áreas: Housekeeping acusa a Recepción de sobrevender y no darles tiempo a limpiar (ventas en falso).",
    "options": [
      {
        "text": "Reemplazar a los jefes de departamento involucrados para introducir un cambio de liderazgo, esperando que nuevas personalidades resuelvan las tensiones inherentes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Considerar el conflicto como una dinámica natural entre departamentos y minimizar su impacto, sugiriendo a ambos equipos que resuelvan sus diferencias internamente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_195",
    "department": "Gerencia",
    "title": "Caso de Gerencia #195",
    "description": "Se viraliza una \"Fake News\" en redes de que el hotel entrará en quiebra y los proveedores exigen pago de contado anticipado.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_196",
    "department": "Gerencia",
    "title": "Caso de Gerencia #196",
    "description": "Una auditoría fiscal gubernamental sorpresa requiere documentación de hace",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_197",
    "department": "Gerencia",
    "title": "Caso de Gerencia #197",
    "description": "La implementación de un nuevo motor de reservas propio resulta en una caída del 50% de la conversión web por fallos en el pago.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
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
        "text": "Proceder con el recorte de incentivos según lo solicitado por la propiedad, confiando en que el personal comprenderá la necesidad de priorizar la inversión en marketing.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Buscar maneras creativas de mantener los incentivos al personal a través de fondos no declarados, con la intención de preservar la moral del equipo a corto plazo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_199",
    "department": "Gerencia",
    "title": "Caso de Gerencia #199",
    "description": "Aumento abrupto y no presupuestado de los impuestos municipales sobre propiedades comerciales del 40%.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_200",
    "department": "Front Desk",
    "title": "Caso de Front Desk #200",
    "description": "Fuga de datos masiva: hackers vulneran la base de datos de los huéspedes robando nombres, emails y datos de tarjetas por negligencia de un proveedor externo.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_201",
    "department": "Front Desk",
    "title": "Caso de Front Desk #201",
    "description": "Huésped llega con un comprobante de reserva falso generado por una estafa en redes sociales (ej. perfil falso en Facebook).",
    "options": [
      {
        "text": "Ofrecerle una habitación disponible únicamente a la tarifa rack del día, justificando que el hotel no puede asumir la pérdida de la reserva fraudulenta.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informarle de manera directa y concisa que su reserva no es válida y que no hay habitaciones disponibles, recomendándole que resuelva el problema con quien le vendió la falsa reserva.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Explicarle la situación con mucha empatía en un área privada, sugerirle que contacte a su banco para denunciar el fraude, y ofrecerle una tarifa especial de contingencia si desea quedarse en el hotel.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_202",
    "department": "Front Desk",
    "title": "Caso de Front Desk #202",
    "description": "La impresora de tarjetas magnéticas se queda sin insumos (tarjetas vírgenes) en pleno check-in de un contingente.",
    "options": [
      {
        "text": "Comunicar al supervisor de inmediato la falta de insumos, y esperar instrucciones o la llegada de un nuevo stock, pidiendo paciencia al contingente mientras tanto.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Sugestir a los huéspedes que, por la falta de llaves, mantengan sus pertenencias cerca y las puertas de sus habitaciones sin seguro, confiando en la honestidad de los demás huéspedes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_203",
    "department": "Front Desk",
    "title": "Caso de Front Desk #203",
    "description": "Cliente extranjero exige pagar en dólares físicos exigiendo una tasa de cambio \"paralela\" o no oficial.",
    "options": [
      {
        "text": "Insistir en que el cliente debe comprender las regulaciones locales, explicando que sus acciones podrían interpretarse como un intento de eludir normativas financieras.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Aceptar el pago en la moneda extranjera al tipo de cambio solicitado, con la condición de manejar la transacción de forma discreta para evitar conflictos con las políticas internas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
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
        "text": "Con base en la apariencia profesional y el aplomo del visitante, asumir que su reclamo es legítimo y proceder a facilitar el acceso a la habitación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Aprobar el acceso del visitante a cambio de una gratificación personal, asegurándose de que la transacción no quede registrada en los sistemas del hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "Evitar cualquier mención de la recomendación del conserje al huésped o a las autoridades, instruyendo al personal a mantener confidencialidad sobre el origen de la información.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Recordarle amablemente al huésped la importancia de la investigación personal y la debida diligencia al explorar áreas desconocidas, enfatizando su propia responsabilidad en la seguridad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_206",
    "department": "Front Desk",
    "title": "Caso de Front Desk #206",
    "description": "Huésped se ofende visiblemente porque el recepcionista no utilizó sus pronombres correctos o título académico (ej. Doctor).",
    "options": [
      {
        "text": "Comentar la situación con los colegas de manera privada, considerándola una peculiaridad del huésped que no requiere mayor adaptación en el trato.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Mantener el trato inicial por costumbre, asumiendo que el huésped eventualmente se adaptará o que no es una prioridad cambiar el registro en ese momento.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_207",
    "department": "Front Desk",
    "title": "Caso de Front Desk #207",
    "description": "Una mujer embarazada solicita atención médica de urgencia por contracciones tempranas en el lobby.",
    "options": [
      {
        "text": "Sugeriere a la huésped que se traslade a un área menos concurrida o fuera de la vista principal del lobby, para mantener la discreción y no perturbar a otros clientes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Consultar al departamento legal sobre la necesidad de un deslinde de responsabilidades antes de activar cualquier servicio médico externo para la huésped.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Activar el código de emergencia médica: llamar a la ambulancia, brindarle privacidad trasladándola a una sala contigua o despejando el área, y acompañarla asegurando que esté lo más cómoda posible.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "Informar al equipo de IT sobre el problema y esperar pacientemente su resolución, asumiendo que el servicio se restablecerá en breve sin necesidad de acciones manuales.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Implementar una política temporal de no aceptar nuevas reservas sin confirmación por correo electrónico, para evitar posibles problemas de sobreventa, incluso si esto significa perder walk-ins.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Ofrecer una habitación estándar, asegurándole que el personal hará lo posible para asistirle con cualquier dificultad, asumiendo que las modificaciones menores serán suficientes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Explicar al huésped que, si bien se registró una preferencia por una habitación adaptada, la disponibilidad no siempre puede garantizarse sin una confirmación explícita.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_210",
    "department": "F&B",
    "title": "Caso de F&B #210",
    "description": "Discusión a gritos e insultos entre dos huéspedes en el área de recepción por un choque en el estacionamiento.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_211",
    "department": "F&B",
    "title": "Caso de F&B #211",
    "description": "El proveedor de lácteos entrega decenas de litros de leche que vencen al día siguiente.",
    "options": [
      {
        "text": "Aceptar la entrega para no generar inconvenientes con el proveedor, planeando usar la leche para preparaciones donde su rápida caducidad o posible alteración de textura sea menos perceptible.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Distribuir la leche para su consumo a lo largo de la semana, confiando en que el plazo de caducidad es una recomendación y que el producto seguirá siendo apto por unos días más.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_212",
    "department": "F&B",
    "title": "Caso de F&B #212",
    "description": "Un cliente solicita comida Kosher certificada, pero el hotel no cuenta con cocina ni vajilla separada.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_213",
    "department": "F&B",
    "title": "Caso de F&B #213",
    "description": "Se rompe el motor de la licuadora industrial del bar en medio de un evento con coctelería \"frozen\".",
    "options": [
      {
        "text": "Informar a los clientes que, lamentablemente, las opciones de coctelería frozen no están disponibles temporalmente debido a un imprevisto técnico.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Intentar preparar las bebidas picando el hielo manualmente con utensilios de cocina para agilizar la producción, aunque esto ralentice el servicio.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "El jefe de barra modifica el menú sobre la marcha ofreciendo versiones \"on the rocks\" (con hielo en cubos) de los mismos tragos, manda a buscar una licuadora doméstica de la cocina como parche y avisa a los invitados.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_214",
    "department": "F&B",
    "title": "Caso de F&B #214",
    "description": "Comensal se atraganta con un trozo de comida en el restaurante y no puede respirar.",
    "options": [
      {
        "text": "Llamar discretamente al supervisor para que él decida qué protocolo de emergencia activar, sin intervenir directamente para evitar empeorar la situación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Acercarse al cliente y ofrecerle ayuda verbalmente, preguntándole si puede beber un poco de agua, sin realizar ninguna acción física.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Un miembro del staff capacitado debe aplicar la Maniobra de Heimlich inmediatamente, mientras otro llama a emergencias médicas y se despeja el área alrededor del cliente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_215",
    "department": "F&B",
    "title": "Caso de F&B #215",
    "description": "Un mozo tropieza y derrama una bandeja de café sobre el material de presentación de un evento corporativo.",
    "options": [
      {
        "text": "Disculparse y solicitar al personal de limpieza que se encargue del derrame, esperando que el organizador del evento gestione la reposición de sus materiales.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Utilizar servilletas de papel disponibles en las mesas para intentar secar los documentos afectados, con la intención de minimizar el daño visible.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "Continuar las operaciones de fritura con precaución, colocando un recipiente metálico grande debajo del goteo para recolectar el aceite y notificar a mantenimiento para el siguiente turno.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Colocar un recipiente para recoger el goteo y seguir operando, asumiendo que es un problema menor que puede resolverse al finalizar el servicio.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Informarle al cliente, de manera firme pero cortés, que la política del restaurante no permite el ingreso de bebidas externas, ofreciéndole guardarla en consigna hasta su salida.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Permitir que el cliente consuma su vino por esta vez, pero con la advertencia de que la próxima vez deberá abonar el descorche según la política establecida.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_218",
    "department": "F&B",
    "title": "Caso de F&B #218",
    "description": "Faltante crítico de vasos limpios en el desayuno por rotura de la bomba del lavavajillas de cristal.",
    "options": [
      {
        "text": "Ofrecer a los clientes tazas de café de cerámica como alternativa para los jugos, explicando que se trata de una solución temporal por un inconveniente técnico.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Solicitar a los clientes que esperen pacientemente, ya que el personal está realizando un lavado manual de los vasos en la cocina para poder reponerlos lo antes posible.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Utilizar temporalmente cristalería de banquetes o vasos térmicos de café de alta calidad para los jugos, destinar a dos lavacopas para el lavado manual a tres tarjas (lavado, enjuague, sanitizado) y avisar a mantenimiento.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_219",
    "department": "F&B",
    "title": "Caso de F&B #219",
    "description": "Un mesero le prohíbe el ingreso al restaurante a un perro guía (lazarillo) de un cliente no vidente.",
    "options": [
      {
        "text": "Ofrecer al cliente una mesa en un área menos concurrida del restaurante, justificando que es para la comodidad del perro guía y de los demás comensales.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Informar al cliente que, por políticas de higiene, no se permiten mascotas en el área del restaurante, ofreciéndole dejar al perro bajo supervisión del personal en la recepción.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "El gerente interviene de inmediato, corrige al mesero informándole de las leyes de accesibilidad universal, pide disculpas al cliente, le asigna una mesa cómoda y le sirve agua para el perro.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_220",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #220",
    "description": "El buffet de postres se queda sin opciones libres de azúcar a los 10 minutos de abrir el turno.",
    "options": [
      {
        "text": "Ofrecer a los clientes las opciones de postres disponibles, sugiriendo que elijan los que parezcan más ligeros o con menos azúcar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Comunicar a los clientes interesados que las opciones sin azúcar se agotaron debido a una demanda inesperadamente alta, y que se repondrán en el siguiente servicio si es posible. Mantenimiento",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "El pastelero improvisa un emplatado rápido de frutas frescas de estación con edulcorante o yogurt natural, y se actualiza el historial de demanda para producir más postres dietéticos al día siguiente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_221",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #221",
    "description": "El agua de la piscina interior amanece turbia y de color verde por un fallo en el retrolavado del filtro de arena.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_222",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #222",
    "description": "La llave de paso general de gas de una sección de calderas se oxida y se atasca, impidiendo el corte manual.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_223",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #223",
    "description": "Tres televisores LED de un mismo piso se queman simultáneamente tras una tormenta eléctrica.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Colocar una señal de 'fuera de servicio' en la puerta y dejarla entreabierta para permitir el acceso, instruyendo al personal de recepción a estar más atento a la entrada y salida de personas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Asegurar la puerta con un dispositivo de bloqueo secundario improvisado para la noche, como una barra o cuña, para garantizar la seguridad, priorizando la pronta intervención de mantenimiento al día siguiente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_225",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #225",
    "description": "Un huésped rompe accidentalmente la pantalla táctil del termostato digital de pared con el golpe de una maleta.",
    "options": [
      {
        "text": "Solicitar al huésped que cambie de habitación de inmediato para que el equipo de mantenimiento pueda evaluar y reparar el termostato dañado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Cubrir los cables expuestos con cinta aislante temporalmente y colocar un aviso de precaución, programando la reparación para el horario diurno y sin molestar al huésped.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Informar a los huéspedes, de manera cortés, que el sistema de riego se activó inesperadamente y que, para su comodidad, deberían reubicarse temporalmente hasta que finalice el ciclo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Permitir que el ciclo de riego se complete para no interferir con la programación automática, mientras se solicita al personal de jardinería que revise el temporizador para futuras activaciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Colocar una señal de 'Precaución' cerca del área afectada y notificar a la gerencia de mantenimiento para que programe la reparación en la próxima jornada laboral, evitando interrupciones.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cubrir los bordes de las baldosas sueltas con una toalla gruesa o una alfombra temporal para mitigar el riesgo de cortes mientras se espera la llegada de los materiales de reparación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "Aplicar un lubricante multiuso disponible en el área de mantenimiento en las partes visibles del mecanismo del ascensor, con la esperanza de reducir el ruido hasta que llegue el técnico especializado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pedir disculpas a los huéspedes afectados por el inconveniente y ofrecerles tapones para los oídos o un cambio de habitación, explicando que el ruido es parte de un mantenimiento programado y necesario.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_229",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #229",
    "description": "Las luces de emergencia de las escaleras de incendios tienen las baterías agotadas y no encienden durante una prueba.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_230",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #230",
    "description": "Se reporta un panal de avispas gigante en uno de los árboles principales del área de estacionamiento/jardín.",
    "options": [
      {
        "text": "Intentar desalojar el panal utilizando un insecticida de uso doméstico disponible en el hotel, manteniendo una distancia segura para evitar picaduras y esperando que las avispas se dispersen. Housekeeping",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Mover con cautela el árbol o rama afectada con una herramienta larga para intentar desprender el panal, creyendo que así se resolverá la situación sin mayor intervención.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Acordonar un radio amplio alrededor del árbol, desviar a los clientes, y llamar a una empresa de fumigación especializada o bomberos para la remoción segura del panal al atardecer.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Aconsejar al huésped que revise los contenedores de reciclaje del piso o que contacte al servicio de recolección de residuos, ya que el objeto podría haber sido desechado inadvertidamente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Explicar al huésped que la política del hotel no cubre la pérdida de objetos personales que no estén debidamente guardados o reportados, enfatizando la importancia de usar estuches para objetos valiosos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_232",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #232",
    "description": "La máquina lavadora-extractora de alfombras perfora una manguera e inunda el pasillo del piso 4.",
    "options": [
      {
        "text": "Intentar desviar el agua hacia un desagüe cercano utilizando una escoba, sin identificar la fuente o la magnitud del problema.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Reportar la fuga de agua al supervisor por radio y esperar sus instrucciones sin tomar ninguna acción preventiva inmediata.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Desconectar la máquina de la corriente, utilizar secadores industriales de aire para evitar que el agua filtre hacia los techos del piso 3, y solicitar mopas de absorción a todo el personal disponible.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Notificar al supervisor de inmediato y esperar a que un encargado o experto en manejo de residuos se haga cargo de la situación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Recoger cuidadosamente las jeringas utilizando una toalla de papel o un guante común para depositarlas en el bote de basura general de la habitación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
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
        "text": "Colocar un cartel en el armario indicando que las perchas están pendientes de reposición y se entregarán a la brevedad posible.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Esperar a que el pedido de perchas nuevas se procese a través del sistema de compras regular, incluso si esto implica una demora considerable para los próximos huéspedes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_235",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #235",
    "description": "El proveedor de limpieza entrega un lote de suavizante de ropa industrial con olor rancio o a humedad.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_236",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #236",
    "description": "Faltante misterioso e inexplicable de secadores de pelo portátiles en 5 habitaciones del mismo piso.",
    "options": [
      {
        "text": "Informar al huésped de salida de una de las habitaciones afectadas que se le realizará un cargo por el secador faltante, basándose únicamente en la suposición.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Sugerir a la Gerencia de Housekeeping que implemente un inventario diario de secadores por mucama, para evitar futuras pérdidas sin investigar el incidente actual.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Iniciar una investigación interna con seguridad, cruzar los horarios de acceso de las tarjetas magnéticas del personal y huéspedes en esas habitaciones, y revisar las cámaras de los pasillos para detectar mochilas sospechosas.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
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
        "text": "Contactar al servicio de atención al cliente del hotel para preguntar si tienen alguna política específica para el manejo de animales encontrados.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar una nota al huésped en la habitación indicando que se encontró una mascota y que deberá retirarla o enfrentar un cargo extra.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_238",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #238",
    "description": "Aumento de licencias médicas por alergias respiratorias del personal de piso por falta de mantenimiento en los filtros de las aspiradoras.",
    "options": [
      {
        "text": "Recomendar al personal afectado que consulte a un médico y presente una licencia, mientras se sigue usando el equipo sin mantenimiento adecuado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Distribuir mascarillas desechables básicas al personal como solución temporal, sin abordar la causa raíz del problema del mantenimiento del equipo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Gerencia de Housekeeping debe auditar los equipos, comprar filtros HEPA de repuesto inmediato, establecer un cronograma semanal obligatorio de lavado de bolsas, y proveer mascarillas al personal alérgico.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
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
        "text": "Indicar a la lavandería que intenten lavar las toallas con un ciclo de blanqueo más fuerte, asumiendo que el daño se puede revertir fácilmente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Dejar un aviso al huésped sobre el uso inadecuado de las toallas, solicitando mayor cuidado en el futuro sin tomar ninguna otra acción.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_240",
    "department": "Gerencia",
    "title": "Caso de Gerencia #240",
    "description": "El carro central de lencería pierde una rueda por exceso de peso y vuelca en el lobby principal frente a los clientes.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "Discutir con el inspector sobre la interpretación de las normas de aforo, argumentando que la capacidad real del salón podría ser mayor.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Negar que se ha excedido el aforo y pedir al inspector que reconsidere su evaluación, insistiendo en que no hay riesgo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_242",
    "department": "Gerencia",
    "title": "Caso de Gerencia #242",
    "description": "El banco rechaza el pago de las nóminas (sueldos) del personal un viernes a la tarde por un error en el archivo de transferencias.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Financiero"
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
        "text": "Enviar un correo electrónico genérico a todos los huéspedes afectados explicando que hubo un error y que sus reservas serán canceladas sin ofrecer alternativas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Notificar a los propietarios del hotel sobre el error y esperar que ellos decidan cómo proceder, sin tomar ninguna medida inmediata para mitigar el impacto.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_244",
    "department": "Gerencia",
    "title": "Caso de Gerencia #244",
    "description": "Auditoría interna descubre que el Jefe de Compras contrata sistemáticamente a la empresa de su cuñado como proveedor sin licitación y con sobreprecios.",
    "options": [
      {
        "text": "Advertir al Jefe de Compras sobre la situación y pedirle que sea más discreto en el futuro, sin aplicar ninguna sanción formal o investigar a fondo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Implementar un nuevo proceso de aprobación para todas las compras futuras, sin investigar ni sancionar las irregularidades pasadas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Recopilar la evidencia documental, suspender temporalmente al implicado, dar de baja los contratos con sobreprecio reasignando a proveedores validados, e iniciar el despido con causa por fraude al código de ética.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_245",
    "department": "Gerencia",
    "title": "Caso de Gerencia #245",
    "description": "Un influencer con 3 millones de seguidores hace una transmisión en vivo quejándose amargamente de la baja velocidad del internet del hotel.",
    "options": [
      {
        "text": "Enviar un mensaje estándar al influencer en redes sociales ofreciendo disculpas por la inconveniencia, sin ofrecer una solución concreta o seguimiento personalizado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Restringir el ancho de banda para todos los usuarios en el piso del influencer para evitar que la situación se repita con otros, sin comunicarse con el huésped afectado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "El equipo de Marketing responde rápidamente contactando al influencer en privado, se envía a TI a su habitación para asignar un router dedicado o cable LAN, y se le ofrece una compensación/explicación técnica.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_246",
    "department": "Gerencia",
    "title": "Caso de Gerencia #246",
    "description": "Renuncia masiva de 3 recepcionistas clave el mismo día, alegando agotamiento (burnout) por turnos rotativos caóticos.",
    "options": [
      {
        "text": "Publicar rápidamente ofertas de empleo para cubrir las vacantes, sin analizar las causas de la renuncia masiva ni buscar mejorar las condiciones laborales.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Solicitar a los empleados restantes que trabajen horas extras indefinidamente para cubrir las vacantes, prometiendo bonificaciones futuras no especificadas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Aceptar las renuncias procesando las liquidaciones, cubrir las vacantes temporales con supervisores/gerentes, y rediseñar los horarios implementando turnos fijos o predecibles con 2 días de descanso seguidos reales.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_247",
    "department": "Gerencia",
    "title": "Caso de Gerencia #247",
    "description": "El competidor directo lanza un paquete \"All Inclusive\" al mismo precio que nuestro plan \"Bed & Breakfast\", robando la demanda.",
    "options": [
      {
        "text": "Iniciar una campaña publicitaria agresiva desacreditando la calidad del servicio del hotel competidor, enfocándose en sus supuestas deficiencias.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Reducir drásticamente el precio del plan \"Bed & Breakfast\" a un nivel insostenible para igualar la oferta del competidor, afectando la rentabilidad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Evitar bajar el precio. En su lugar, empaquetar servicios sin costo marginal alto (ej. acceso libre al spa, late check-out, créditos en A&B) y destacar en marketing la superioridad gastronómica o ubicación exclusiva del hotel frente a las restricciones del Todo Incluido ajeno.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
  },
  {
    "id": "sit_248",
    "department": "Gerencia",
    "title": "Caso de Gerencia #248",
    "description": "Se descubre tras un robo que el sistema de cámaras de seguridad (DVR/CCTV) lleva un mes con el disco rígido lleno sin grabar y nadie lo sabía.",
    "options": [
      {
        "text": "Informar al huésped robado que la responsabilidad de sus objetos de valor es suya y que el hotel no se hace responsable por pérdidas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Argumentar que el sistema de cámaras es solo para fines de monitoreo interno y no como medida de seguridad garantizada para los huéspedes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Reparar/formatear los discos inmediatamente o implementar almacenamiento en la nube, indemnizar al huésped robado asumiendo la falla de seguridad, e instaurar una rutina de chequeo de grabación diario (Checklist) para seguridad/IT.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_249",
    "department": "Gerencia",
    "title": "Caso de Gerencia #249",
    "description": "Los propietarios ordenan recortar en un 80% el presupuesto de mantenimiento preventivo para aumentar sus dividendos trimestrales.",
    "options": [
      {
        "text": "Acatar la orden y posponer solo el mantenimiento estético, priorizando las reparaciones críticas solo cuando ya se han producido daños evidentes.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Comunicar a los jefes de departamento que ajusten sus solicitudes de mantenimiento, sin cuestionar la decisión de los propietarios ni advertir sobre riesgos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "El Gerente General debe elaborar una presentación técnica de riesgo (Matriz de Riesgo) evidenciando que el ahorro hoy costará 10 veces más mañana por roturas mayores (calderas, ascensores) y posibles demandas civiles por accidentes.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_250",
    "department": "Front Desk",
    "title": "Caso de Front Desk #250",
    "description": "Notificación de una demanda civil y mediación del Ministerio de Trabajo por presunta discriminación durante el despido de un exempleado.",
    "options": [
      {
        "text": "A) Informar al exempleado que el departamento legal se encargará de cualquier comunicación futura y que no hay necesidad de mediación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Archivar la notificación en el expediente del exempleado y esperar instrucciones específicas de la dirección general sin tomar ninguna acción proactiva.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_251",
    "department": "Front Desk",
    "title": "Caso de Front Desk #251",
    "description": "Walk-in de madrugada pide habitación, pero el PMS está en medio de un mantenimiento programado (caída de servidor).",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_252",
    "department": "Front Desk",
    "title": "Caso de Front Desk #252",
    "description": "Huésped se niega a dejar tarjeta de crédito en garantía, solo ofrece efectivo pero no cubre posibles daños.",
    "options": [
      {
        "text": "A) Indicarle que, si no cumple con la política de garantía de tarjeta de crédito, lamentablemente no será posible proceder con el check-in, según las normas del hotel.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Permitirle el check-in con el pago exclusivo de la tarifa de la habitación en efectivo, registrando la observación en el sistema y notificando a la gerencia para su conocimiento.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Explicar amablemente la política de garantía, aceptar un depósito en efectivo mayor (estipulado por gerencia) que se reintegrará al check-out tras la revisión de la habitación, o bloquear los consumos a crédito (línea cero).",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_253",
    "department": "Front Desk",
    "title": "Caso de Front Desk #253",
    "description": "Recepción recibe una notificación legal (carta documento) dirigida a un huésped que ya hizo check-out.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_254",
    "department": "Front Desk",
    "title": "Caso de Front Desk #254",
    "description": "Cliente corporativo se queja de que el WiFi es muy lento para una videollamada de negocios crítica.",
    "options": [
      {
        "text": "A) Sugerir al cliente que intente reiniciar su dispositivo y verificar su conexión personal, ya que la red general del hotel opera dentro de parámetros estándar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Explicar que el servicio de WiFi básico es una cortesía y que la calidad de la conexión puede variar debido a la demanda y la infraestructura existente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_255",
    "department": "Front Desk",
    "title": "Caso de Front Desk #255",
    "description": "Huésped reporta la pérdida de una campera y exige una constancia formal del reclamo para su seguro.",
    "options": [
      {
        "text": "A) Informarle que el hotel declina responsabilidad por objetos de valor no resguardados en las cajas de seguridad de la habitación, de acuerdo con la política interna.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Tomar nota del incidente en un registro informal de objetos perdidos y asegurar al huésped que se le contactará si el artículo aparece.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ingresar los datos en la aplicación de Lost & Found del hotel, generar un documento legal o constancia en formato PDF con número de seguimiento y enviárselo por correo electrónico al instante.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "B) Ofrecer la Suite Presidencial como una alternativa, explicando que implicaría un cargo adicional por la diferencia de categoría.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Proponer reubicarlos en dos habitaciones estándar disponibles en diferentes pisos, explicando que es la única solución ante la falta de disponibilidad de habitaciones contiguas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_257",
    "department": "Front Desk",
    "title": "Caso de Front Desk #257",
    "description": "Huésped solicita factura a nombre de una empresa exenta de impuestos pero no trae el certificado de exención.",
    "options": [
      {
        "text": "A) Proceder a emitir la factura sin impuestos, confiando en la promesa del cliente de enviar el certificado de exención por correo electrónico en los próximos días.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Indicar al huésped que, al no tener el certificado, la facturación se realizará con los impuestos correspondientes, sin ofrecer alternativas para una futura rectificación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Emitir la factura temporalmente con los impuestos correspondientes, indicando que si envía el certificado digital escaneado dentro de las 24 horas, se anulará y se refacturará correctamente.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_258",
    "department": "Front Desk",
    "title": "Caso de Front Desk #258",
    "description": "Grupo de egresados hace ruido insoportable en el lobby a las 2 AM, molestando a las habitaciones del primer piso.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "B) Proporcionarle la información de contacto de las autoridades locales y del consulado, sugiriéndole que gestione el resto de los trámites de forma independiente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Expresar empatía por la situación, pero aclararle que la gestión de documentos personales y vuelos es responsabilidad exclusiva del huésped.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "UserCheck",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_260",
    "department": "F&B",
    "title": "Caso de F&B #260",
    "description": "Falla la placa electrónica de la puerta principal y nadie puede entrar o salir del hotel de forma automatizada.",
    "options": [
      {
        "text": "A) Dirigir a los huéspedes a la entrada de servicio del personal, justificando la medida como temporal por motivos operativos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Solicitar al personal de seguridad que intente forzar la apertura manual de la puerta, evaluando la posibilidad de daños colaterales mínimos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_261",
    "department": "F&B",
    "title": "Caso de F&B #261",
    "description": "Cliente con dieta estricta cetogénica (Keto) no encuentra opciones adecuadas en el menú de Room Service.",
    "options": [
      {
        "text": "A) Sugerirle que revise las opciones de guarniciones y acompañamientos del menú, ya que no se pueden crear platos personalizados fuera de la oferta estándar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Ofrecer la opción de retirar componentes no deseados de un plato existente (ej. pan de una hamburguesa), pero sin modificar la preparación base del mismo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ofrecerle armar un plato especial al mismo precio (ej. cortes de carne, huevos, palta, vegetales bajos en almidón), comunicar el requerimiento al chef y asegurar que no se utilicen azúcares ni harinas en la cocción.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "B) Disponer que los camareros limpien los platos del primer tiempo con servilletas húmedas para reutilizarlos en el segundo plato, minimizando la interrupción.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Informar a los anfitriones del evento sobre la situación y proponer la cancelación del segundo plato, ofreciendo una compensación simbólica por el inconveniente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_263",
    "department": "F&B",
    "title": "Caso de F&B #263",
    "description": "Inspección interna bromatológica encuentra que las tablas de cortar en cocina no están separadas por colores.",
    "options": [
      {
        "text": "A) Aclarar al inspector que el personal tiene instrucciones de lavar y desinfectar rigurosamente las tablas entre cada uso, independientemente del color.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Justificar la situación argumentando que la compra de tablas de colores no ha sido prioritaria en el presupuesto anual, pero que el personal es consciente de la importancia de la higiene.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_264",
    "department": "F&B",
    "title": "Caso de F&B #264",
    "description": "Cliente devuelve un vino costoso argumentando que está \"picado\", pero el sommelier verifica discretamente que el vino está en perfectas condiciones.",
    "options": [
      {
        "text": "A) Insistir amablemente al cliente que el vino cumple con los estándares de calidad y que quizás su percepción se deba a preferencias personales.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Tras un breve periodo, presentar nuevamente la misma botella al cliente, sugiriendo que el vino puede necesitar un tiempo adicional para airearse y liberar sus aromas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "B) Informar a los clientes en el bar que, debido a un problema técnico temporal, solo se podrán ofrecer bebidas sin hielo, sugiriendo opciones de bebidas que tradicionalmente se sirven a temperatura ambiente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Suspender temporalmente la venta de bebidas que requieren hielo y notificar a la gerencia sobre la imposibilidad de operar el servicio de bar hasta nuevo aviso.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_266",
    "department": "F&B",
    "title": "Caso de F&B #266",
    "description": "Un camarero derrama sopa caliente sobre la notebook de un cliente que trabajaba en el restaurante.",
    "options": [
      {
        "text": "A) Ofrecer secar la computadora con un paño de cocina y aconsejar al cliente que no la encienda por un tiempo, esperando que se evapore la humedad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Expresar disculpas por el incidente y recordar al cliente la importancia de mantener objetos personales sensibles alejados de áreas de servicio de alimentos y bebidas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
  },
  {
    "id": "sit_267",
    "department": "F&B",
    "title": "Caso de F&B #267",
    "description": "Faltante masivo de cubiertos de plata del salón tras un evento privado corporativo.",
    "options": [
      {
        "text": "A) Notificar al personal de servicio que el costo de los cubiertos faltantes será descontado de las propinas o bonificaciones correspondientes al evento.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Adquirir rápidamente cubiertos de reemplazo de una calidad inferior para evitar futuras pérdidas y asegurar la operatividad, sin informar a la gerencia sobre el incidente original.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Revisar las estaciones de desbarase y la zona de recolección de residuos orgánicos por si cayeron accidentalmente a la basura; si se confirma hurto, facturarlo a la empresa contratante según contrato de alquiler.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_268",
    "department": "F&B",
    "title": "Caso de F&B #268",
    "description": "Comensal vegano encuentra un trozo de tocino escondido en su ensalada \"100% plant-based\".",
    "options": [
      {
        "text": "A) Disculparse por el incidente, retirar cuidadosamente el trozo de tocino y ofrecer al comensal un postre de cortesía para compensar el inconveniente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Expresar disculpas por el malentendido y asegurar al comensal que el platillo fue preparado según la receta, sugiriéndole que el incidente podría ser un error de la cocina pero que no se volverá a repetir.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Retirar el plato con profundas disculpas, informar de la grave falta al chef para que revise toda la línea de emplatado, preparar una ensalada nueva y bonificar el 100% de la mesa como compensación.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Coffee",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_269",
    "department": "F&B",
    "title": "Caso de F&B #269",
    "description": "Salta la térmica de las heladeras de postres en la cafetería y se pierde la cadena de frío durante la madrugada.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_270",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #270",
    "description": "Cliente se levanta y se va sin pagar (simula ir al baño) en una mesa exterior de la terraza.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Financiero"
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
        "text": "B) Colocar baldes estratégicamente bajo las goteras para contener el derrame, señalizar la zona para advertir a los clientes y contactar al supervisor de mantenimiento para reportar la incidencia y programar una revisión.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Realizar una pequeña perforación en el falso techo en un punto discreto para canalizar la fuga hacia un contenedor, con el objetivo de evitar una acumulación mayor y una caída repentina.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_272",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #272",
    "description": "Ascensor de servicio se frena entre pisos y el intercomunicador de emergencia está desconectado.",
    "options": [
      {
        "text": "A) Indicar a los ocupantes que intenten forzar la apertura de las puertas del ascensor desde el interior con cuidado, mientras se espera la llegada de un técnico o personal capacitado.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Notificar a los empleados atrapados que ya se contactó al servicio técnico del ascensor, y que deben esperar pacientemente hasta que llegue el personal especializado, ya que la prioridad es su seguridad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_273",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #273",
    "description": "Termotanque central sufre una microfisura y el agua caliente sale con sedimentos de óxido en las duchas.",
    "options": [
      {
        "text": "A) Comunicar a los huéspedes que la variación en el color del agua es temporal y producto de un mantenimiento rutinario en la red, asegurando que no afecta la calidad ni la seguridad del agua.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Suspender el suministro de agua caliente en las habitaciones afectadas para evitar que los huéspedes perciban la irregularidad, y notificar a recepción para que informen de la situación como una incidencia de mantenimiento general.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_274",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #274",
    "description": "Sistema de climatización central (Chiller) tira aire caliente en pleno enero por falta de gas refrigerante.",
    "options": [
      {
        "text": "A) Realizar recargas de gas refrigerante periódicamente para mantener el sistema funcionando mínimamente y así evitar interrupciones completas, programando una revisión exhaustiva para un momento de menor ocupación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Desactivar el sistema de climatización central para prevenir daños mayores y, como medida provisional, sugerir a los huéspedes que mantengan las ventanas abiertas y les proporcionar ventiladores de pie básicos si lo solicitan.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_275",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #275",
    "description": "Se quema la bomba sumergible de la piscina exterior y el agua no filtra hace",
    "options": [
      {
        "text": "A) Asignar al personal de mantenimiento la tarea de agitar y remover el agua de la piscina con pértigas y cepillos de fondo varias veces al día para evitar la formación de algas y mantener una apariencia limpia.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Incrementar la dosis de floculantes y desinfectantes químicos de manera preventiva para mantener la transparencia y salubridad aparente del agua de la piscina, minimizando la percepción del problema.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cerrar la piscina por prevención sanitaria, instalar una bomba externa de superficie provisional (tipo carro) prestada o alquilada para mantener el filtrado, mientras se rebobina el motor de la bomba titular.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_276",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #276",
    "description": "Huésped se queja de un \"pitido eléctrico\" constante en la pared que no lo deja dormir.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_277",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #277",
    "description": "Fuerte olor a quemado y humo proveniente del tablero eléctrico general en el subsuelo.",
    "options": [
      {
        "text": "A) Utilizar un extintor de agua presurizada cercano para intentar contener el fuego lo más rápido posible, priorizando la extinción inmediata sobre el tipo de equipo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Sellar las puertas del subsuelo con cinta adhesiva y cerraduras para evitar la propagación del olor a quemado y el humo al resto del edificio, y notificar al supervisor para una evaluación futura.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cortar el suministro general desde la acometida externa, utilizar extintores de CO2 (Clase C) si hay fuego, llamar a bomberos y convocar a un ingeniero eléctrico para evaluar el cortocircuito en las barras colectoras.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_278",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #278",
    "description": "Rotura del mecanismo automático de las puertas corredizas de la entrada principal.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_279",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #279",
    "description": "Inundación en el cuarto de bombas debido a una válvula de retención que reventó.",
    "options": [
      {
        "text": "A) Permitir que el agua se disperse y se evapore de forma natural, ya que la zona no es de tránsito habitual de huéspedes, y programar una limpieza exhaustiva para cuando el nivel baje.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Colocar pasarelas improvisadas con palets o tablas sobre el agua para permitir el acceso del personal al cuarto de bombas, mientras se evalúa la mejor forma de proceder con el desagote.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cerrar las válvulas guillotina adyacentes para detener el flujo, encender las bombas de achique (sumidero) del subsuelo para sacar el agua, y reemplazar la pieza dañada protegiendo los tableros eléctricos cercanos.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Wrench",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_280",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #280",
    "description": "Sistema de extracción de monóxido del estacionamiento no arranca en automático al llegar a niveles tóxicos.",
    "options": [
      {
        "text": "A) Disponer de varios ventiladores portátiles en puntos estratégicos del estacionamiento, dirigiéndolos hacia las rampas, para intentar forzar la salida de los gases y mejorar la calidad del aire.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Realizar una inspección visual y olfativa personal en el estacionamiento para estimar la gravedad de la situación, y luego decidir si es necesario tomar medidas adicionales.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_281",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #281",
    "description": "Mucama reporta que la caja fuerte de una habitación desocupada (check-out) quedó bloqueada y cerrada.",
    "options": [
      {
        "text": "A) Consultar el registro de huésped para intentar usar posibles combinaciones personales como fechas importantes o números de habitación, buscando una solución rápida antes de escalar el problema.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Notificar a recepción para que marquen la caja fuerte como 'fuera de servicio' en el sistema y adviertan al próximo huésped que no está disponible para su uso.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_282",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #282",
    "description": "Huésped fumó en una habitación de no fumadores y quemó la colcha principal de la cama.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "B) Recordar al personal de limpieza la importancia de la eficiencia en sus tareas, sugiriendo que distribuyan mejor el peso en los carros o pidan ayuda a un compañero si el esfuerzo es excesivo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Optimizar las rutas de limpieza para minimizar el uso de carros, animando al personal a llevar consigo los elementos más ligeros y a realizar viajes adicionales para los más pesados, hasta que se resuelva la situación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_284",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #284",
    "description": "Desabastecimiento de amenidades líquidas (shampoo/jabón) para los dispensers recargables de las duchas.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_285",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #285",
    "description": "Se encuentra un fajo grande de dinero en efectivo suelto debajo del colchón durante una limpieza profunda.",
    "options": [
      {
        "text": "A) Dejar el fajo de dinero exactamente donde fue encontrado, documentando su ubicación, en caso de que el huésped anterior regrese a reclamarlo directamente.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "B) Entregar el dinero a un fondo común de la gerencia para 'hallazgos sin identificar' y, si no es reclamado en un período prolongado, utilizarlo para actividades de confraternidad del personal o pequeñas mejoras del departamento.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "No tocar el dinero, llamar inmediatamente al supervisor/seguridad, empaquetarlo en sobre lacrado documentando el monto exacto, y contactar al último huésped que ocupó la habitación para su restitución legal.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_286",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #286",
    "description": "Mucama sufre una reacción alérgica grave en la piel por utilizar desengrasante puro sin guantes.",
    "options": [
      {
        "text": "A) Suministrar una crema protectora o loción calmante para aliviar la irritación de la piel y recordarle la importancia de usar guantes en el futuro, permitiéndole decidir si puede continuar con su jornada laboral.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "C) Documentar el incidente como una negligencia del empleado por no seguir los protocolos de seguridad, y recordarle que el uso de EPP es su responsabilidad para evitar futuras incidencias.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_287",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #287",
    "description": "Huésped se queja de que le tiraron a la basura un vaso térmico negro de diseño creyendo que era descartable.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Servicio al Cliente"
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
        "text": "B) Aplicar un neutralizador de olores en las almohadas, airearlas en un área de servicio ventilada y luego utilizar fundas de almohada aromáticas para enmascarar el olor a humedad antes de distribuirlas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Re-procesar las almohadas en la lavandería interna del hotel con un ciclo de lavado extra y un secado intensivo, y luego almacenarlas en un área con buena ventilación antes de su uso.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
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
        "text": "B) Evaluar la posibilidad de eliminar la bañera y la mampara, dejando una ducha abierta si la estructura lo permite, hasta que se pueda planificar una solución más definitiva para el baño.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "C) Realizar una limpieza inicial con escoba y pala para retirar los fragmentos más grandes de cristal, y luego notificar a mantenimiento para que se encargue de una aspiración más detallada antes de reasignar la habitación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "Sparkles",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_290",
    "department": "Gerencia",
    "title": "Caso de Gerencia #290",
    "description": "Cortinas blackout de una suite presidencial se desprenden del riel superior bloqueando la ventana.",
    "options": [
      {
        "text": "Cortar la tela que cuelga con una tijera arruinando la estética de la cortina. Gerencia",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Pegar el blackout al marco de la ventana con cinta de embalar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Mantenimiento acude de inmediato con escalera, reemplaza los ganchos deslizantes rotos por repuestos metálicos y asegura la fijación a la pared con tarugos para el peso excesivo.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_291",
    "department": "Gerencia",
    "title": "Caso de Gerencia #291",
    "description": "El dashboard del Tremun Quality Center (NPS) procesa erróneamente las encuestas con puntaje de 8 como \"Promotores\" debido a una regla de cálculo desactualizada.",
    "options": [
      {
        "text": "Dejar el error en el sistema porque eleva artificialmente los números y hace quedar bien al equipo ante los directivos.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Borrar los datos históricos y cambiar la métrica a \"Estrellas\" para no tener que arreglar la fórmula del NPS.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_292",
    "department": "Gerencia",
    "title": "Caso de Gerencia #292",
    "description": "Se implementa una actualización de código (Front-end) en la web de reservas, pero el diseño resultante rompe la interfaz móvil y los textos se superponen.",
    "options": [
      {
        "text": "Dejar la web rota obligando a los usuarios a reservar por teléfono, asumiendo una pérdida masiva de ventas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ignorar las quejas asumiendo que los huéspedes tienen teléfonos obsoletos y no saben navegar.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Ordenar al equipo de desarrollo que descarte ese código defectuoso, realice un rollback (reversión) a la versión anterior estable de inmediato, y trabaje en un entorno de pruebas (Staging) hasta que la maquetación sea óptima.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
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
        "text": "Tirar las bolsas de basura del hotel en los contenedores de los vecinos de la cuadra.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Apilar la basura putrefacta en la zona de ingreso de proveedores afectando a la cocina.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Operaciones"
  },
  {
    "id": "sit_294",
    "department": "Gerencia",
    "title": "Caso de Gerencia #294",
    "description": "El proveedor del PMS (Software Hotelero) sufre un ciberataque de ransomware a nivel global, paralizando todos los accesos.",
    "options": [
      {
        "text": "Pagar el rescate a los hackers desde las cuentas del hotel sin consultar a las autoridades de ciberseguridad.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Cerrar el hotel y echar a los huéspedes porque sin sistema \"no se puede trabajar\".",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Activar el \"Plan de Continuidad de Negocio\": sacar las carpetas de emergencia impresas (Reportes de Check-in/out del día anterior), pasar a registros en Excel sin conexión a internet, y emitir facturas manuales legales.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  },
  {
    "id": "sit_295",
    "department": "Gerencia",
    "title": "Caso de Gerencia #295",
    "description": "Un hotel de la misma cadena tiene márgenes operativos (GOP) mucho más altos, y gerencia regional exige explicaciones por nuestro bajo rendimiento.",
    "options": [
      {
        "text": "Acusar al otro gerente de estar lavando dinero y negarse a cooperar en la auditoría.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Manipular los estados financieros moviendo gastos operativos a cuentas de capital (CAPEX) para engañar a la región.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Financiero"
  },
  {
    "id": "sit_296",
    "department": "Gerencia",
    "title": "Caso de Gerencia #296",
    "description": "Aumento vertiginoso de quejas por demoras en la recepción; Recursos Humanos reporta una rotación de recepcionistas del 60% semestral.",
    "options": [
      {
        "text": "Obligar a las mucamas a cubrir turnos en recepción sin capacitación en sistemas.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Contratar tres pasantes sin experiencia ni sueldo para que llenen los espacios vacíos del mostrador.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_297",
    "department": "Gerencia",
    "title": "Caso de Gerencia #297",
    "description": "Reclamo sindical exige mejoras inmediatas en el menú del comedor de personal por considerar que tiene bajo valor nutritivo.",
    "options": [
      {
        "text": "Amenazar a los delegados con despedirlos si vuelven a quejarse de la comida gratuita.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Suspender el comedor de personal y darle a cada empleado una manzana al día como viático.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Iniciar una mesa de diálogo con el chef ejecutivo y los delegados para rediseñar el menú rotativo mensual, incluyendo opciones saludables (proteína magra, vegetales), respetando el costo por cubierto presupuestado.",
        "effectiveness": 100,
        "metrics": {
          "resolution": 100,
          "analysis": 100,
          "empathy": 100
        },
        "feedback": "Acción impecable. Cumpliste con los estándares profesionales de manera excepcional."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "RRHH"
  },
  {
    "id": "sit_298",
    "department": "Gerencia",
    "title": "Caso de Gerencia #298",
    "description": "Notificación de una multa municipal gravísima por ruidos molestos reiterados provenientes del \"Rooftop Bar\" (Terraza).",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false,
    "rubro": "Legal / Sanidad"
  },
  {
    "id": "sit_299",
    "department": "Gerencia",
    "title": "Caso de Gerencia #299",
    "description": "La OTA principal (ej. Booking) penaliza al hotel bajándolo a la página 4 de resultados por tener una altísima tasa de cancelaciones.",
    "options": [
      {
        "text": "Cerrar el canal de la OTA perdiendo el 40% de las ventas anuales por orgullo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
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
        "text": "Crear cientos de reservas falsas y concretarlas para engañar al algoritmo.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Comercial / Marketing"
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
        "text": "Culpar al departamento de mantenimiento creyendo que desenchufaron la \"nube\".",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      },
      {
        "text": "Entrar en pánico, suspender todas las reuniones gerenciales de la semana y detener la facturación.",
        "effectiveness": 0,
        "metrics": {
          "resolution": 0,
          "analysis": 0,
          "empathy": 0
        },
        "feedback": "Esta acción es deficiente y viola los procedimientos de hospitalidad establecidos."
      }
    ],
    "icon": "LineChart",
    "isAudioResponse": false,
    "isOpenEnded": false,
    "rubro": "Mantenimiento / IT"
  }
];

module.exports = situations;