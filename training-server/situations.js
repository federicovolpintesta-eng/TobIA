const situations = [
  {
    "id": "sit_open_1",
    "department": "Front Desk",
    "title": "Caso Crítico: Huésped Furioso (Role-Play)",
    "description": "Un huésped VIP baja a recepción gritando porque su habitación no fue limpiada y exige hablar con el gerente general inmediatamente. Responde con tus propias palabras (Role-Play Abierto):",
    "isOpenEnded": false,
    "options": [],
    "icon": "MessageSquare",
    "isAudioResponse": true
  },
  {
    "id": "sit_1",
    "department": "Front Desk",
    "title": "Caso de Front Desk #1",
    "description": "Caída del sistema PMS durante el check-out de un grupo.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_2",
    "department": "Front Desk",
    "title": "Caso de Front Desk #2",
    "description": "Huésped llega con una reserva confirmada, pero el hotel está en situación de overbooking.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_3",
    "department": "Front Desk",
    "title": "Caso de Front Desk #3",
    "description": "Queja por ruidos molestos en la habitación contigua a las 3:00 AM.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_4",
    "department": "Front Desk",
    "title": "Caso de Front Desk #4",
    "description": "Huésped extranjero no habla español ni inglés, y hay un problema con su tarjeta de crédito.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_5",
    "department": "Front Desk",
    "title": "Caso de Front Desk #5",
    "description": "Cliente frecuente (Promotor histórico) exige un upgrade gratuito a la Suite, pero está ocupada.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_6",
    "department": "Front Desk",
    "title": "Caso de Front Desk #6",
    "description": "Llegada de un huésped 5 horas antes del horario oficial de check-in.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_7",
    "department": "Front Desk",
    "title": "Caso de Front Desk #7",
    "description": "Discrepancia de tarifa: el huésped dice que la OTA le mostraba un precio menor al que figura en el sistema.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_8",
    "department": "Front Desk",
    "title": "Caso de Front Desk #8",
    "description": "Detección de un pasaporte vencido al momento de tomar los datos del check-in.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_9",
    "department": "Front Desk",
    "title": "Caso de Front Desk #9",
    "description": "Huésped reporta haber perdido su llave magnética y solicita un duplicado.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_10",
    "department": "F&B",
    "title": "Caso de F&B #10",
    "description": "Se recibe una llamada de amenaza de bomba en el hotel.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_11",
    "department": "F&B",
    "title": "Caso de F&B #11",
    "description": "Huésped reporta una alergia severa al maní después de que ya se le sirvió el plato.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_12",
    "department": "F&B",
    "title": "Caso de F&B #12",
    "description": "Demora de 50 minutos en un pedido de Room Service (el estándar es 25).",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_13",
    "department": "F&B",
    "title": "Caso de F&B #13",
    "description": "Fuego descontrolado en la zona de la parrilla durante la preparación de un asado para un evento del hotel.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_14",
    "department": "F&B",
    "title": "Caso de F&B #14",
    "description": "Quiebre de stock de un vino premium que un cliente VIP acaba de pedir.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_15",
    "department": "F&B",
    "title": "Caso de F&B #15",
    "description": "Mesero derrama accidentalmente una copa de vino sobre la camisa del cliente.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_16",
    "department": "F&B",
    "title": "Caso de F&B #16",
    "description": "Falta de reposición en el buffet de desayuno en horario pico; los huéspedes hacen fila.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_17",
    "department": "F&B",
    "title": "Caso de F&B #17",
    "description": "Huésped se niega a firmar la cuenta del bar argumentando que le cobraron bebidas de más.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_18",
    "department": "F&B",
    "title": "Caso de F&B #18",
    "description": "Proveedor de pescados y mariscos llega 4 horas tarde, afectando el menú del día.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_19",
    "department": "F&B",
    "title": "Caso de F&B #19",
    "description": "Vajilla de un banquete sale del lavavajillas industrial con restos de comida.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_20",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #20",
    "description": "Cliente vegano se queja de que la única opción en la carta es una ensalada básica.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_21",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #21",
    "description": "El aire acondicionado de una Suite gotea agua directamente sobre la cama.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_22",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #22",
    "description": "Ascensor principal se traba entre pisos con tres huéspedes adentro.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_23",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #23",
    "description": "Corte general de luz en la zona y el grupo electrógeno no arranca automáticamente.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_24",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #24",
    "description": "Los parámetros químicos de la piscina exterior están desbalanceados (pH muy alto, cloro bajo).",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_25",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #25",
    "description": "Fuerte olor a gas reportado cerca de la cocina central.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_26",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #26",
    "description": "Huésped reporta que el agua de la ducha sale de color marrón.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_27",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #27",
    "description": "Cerradura electrónica de una habitación se queda sin batería con el huésped afuera.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_28",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #28",
    "description": "Filtración grave de agua desde el techo hacia el lobby principal.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_29",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #29",
    "description": "El sistema de calderas falla en pleno invierno y no hay agua caliente en todo el edificio.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_30",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #30",
    "description": "Televisores Smart de un piso entero pierden la conexión a la red Wi-Fi.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_31",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #31",
    "description": "Mucama encuentra un reloj de alta gama olvidado en una habitación recién desocupada.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_32",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #32",
    "description": "Faltante crítico de toallas limpias desde la lavandería externa en horario de check-in.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_33",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #33",
    "description": "Se descubre fuerte olor a humo de cigarrillo en una habitación estricta de no fumadores.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_34",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #34",
    "description": "Carro de limpieza es dejado bloqueando parcial o totalmente una salida de emergencia.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_35",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #35",
    "description": "Huésped acusa al personal de Housekeeping de haberle robado dinero en efectivo de la mesa de luz.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_36",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #36",
    "description": "Descubrimiento de chinches de cama (bedbugs) durante el recambio de sábanas.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_37",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #37",
    "description": "Mascota de un huésped \"Pet-Friendly\" hizo sus necesidades en la alfombra.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_38",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #38",
    "description": "La inspección de calidad revela pelos en el lavamanos después de que la habitación fue marcada como \"Limpia\".",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_39",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #39",
    "description": "Huésped cuelga el cartel de \"No Molestar\" durante 3 días seguidos.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_40",
    "department": "Gerencia",
    "title": "Caso de Gerencia #40",
    "description": "Desabastecimiento de amenidades (shampoo, jabón) en el cuarto de insumos del piso.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_41",
    "department": "Gerencia",
    "title": "Caso de Gerencia #41",
    "description": "El dashboard de satisfacción muestra una caída en el NPS debido a un aumento de puntuaciones 0-6.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_42",
    "department": "Gerencia",
    "title": "Caso de Gerencia #42",
    "description": "Se detecta una rotación de personal del 40% anual en la recepción.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_43",
    "department": "Gerencia",
    "title": "Caso de Gerencia #43",
    "description": "El hotel recibe una inspección sorpresa de sanidad en el restaurante y encuentra irregularidades.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_44",
    "department": "Gerencia",
    "title": "Caso de Gerencia #44",
    "description": "Un proveedor crítico de software (PMS) anuncia un aumento de precio del",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_45",
    "department": "Gerencia",
    "title": "Caso de Gerencia #45",
    "description": "Resistencia severa del personal operativo ante la implementación de una nueva herramienta de digitalización.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_46",
    "department": "Gerencia",
    "title": "Caso de Gerencia #46",
    "description": "La competencia directa baja sus tarifas un 25% para robar cuota de mercado en temporada baja.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_47",
    "department": "Gerencia",
    "title": "Caso de Gerencia #47",
    "description": "Un video de un huésped quejándose de la limpieza se vuelve viral en TikTok/Instagram.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_48",
    "department": "Gerencia",
    "title": "Caso de Gerencia #48",
    "description": "Desvío del 18% en el presupuesto de gastos operativos (GOP) por exceso en consumo de energía.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_49",
    "department": "Gerencia",
    "title": "Caso de Gerencia #49",
    "description": "Conflicto sindical inminente con el personal de maestranza por condiciones de descanso.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_50",
    "department": "Front Desk",
    "title": "Caso de Front Desk #50",
    "description": "El propietario del hotel exige recuperar la inversión de capital recortando drásticamente la calidad de los amenities.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_51",
    "department": "Front Desk",
    "title": "Caso de Front Desk #51",
    "description": "Llega un grupo de 15 personas (Walk-ins) sin reserva previa a última hora de la noche.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_52",
    "department": "Front Desk",
    "title": "Caso de Front Desk #52",
    "description": "Huésped corporativo necesita facturación dividida entre la empresa y sus gastos extras personales.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_53",
    "department": "Front Desk",
    "title": "Caso de Front Desk #53",
    "description": "Reclamo de un huésped sobre un objeto de valor no encontrado al retirarse.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_54",
    "department": "Front Desk",
    "title": "Caso de Front Desk #54",
    "description": "Falla en la terminal de pagos (POS) durante el horario pico de salidas.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_55",
    "department": "Front Desk",
    "title": "Caso de Front Desk #55",
    "description": "Familia con reserva para dos personas llega con tres niños pequeños sin declarar.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_56",
    "department": "Front Desk",
    "title": "Caso de Front Desk #56",
    "description": "Huésped solicita un late check-out hasta las 18:00 hs, pero su habitación está asignada a una nueva llegada.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_57",
    "department": "Front Desk",
    "title": "Caso de Front Desk #57",
    "description": "Activación de una falsa alarma de incendio en la madrugada.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_58",
    "department": "Front Desk",
    "title": "Caso de Front Desk #58",
    "description": "Cliente se presenta para el check-in con claros síntomas de ebriedad y actitud violenta.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_59",
    "department": "Front Desk",
    "title": "Caso de Front Desk #59",
    "description": "Error de comunicación: un traslado al aeropuerto reservado por el huésped no fue agendado con la empresa tercerizada.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_60",
    "department": "F&B",
    "title": "Caso de F&B #60",
    "description": "Un pasajero sufre un desmayo en el medio del lobby.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_61",
    "department": "F&B",
    "title": "Caso de F&B #61",
    "description": "Queja de un comensal porque el corte de asado tradicional argentino llegó frío y fuera de su punto de cocción solicitado.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_62",
    "department": "F&B",
    "title": "Caso de F&B #62",
    "description": "Faltan termos y yerba para el servicio de mate en el buffet de desayuno, generando enojo en turistas locales.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_63",
    "department": "F&B",
    "title": "Caso de F&B #63",
    "description": "Un evento corporativo pide extender el servicio de barra libre por dos horas no pactadas en el contrato original.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_64",
    "department": "F&B",
    "title": "Caso de F&B #64",
    "description": "Máquina de café expreso sufre una avería crítica en pleno horario de desayuno.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_65",
    "department": "F&B",
    "title": "Caso de F&B #65",
    "description": "Disputa a gritos entre el Chef Ejecutivo y el Maître frente a las puertas batientes del salón.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_66",
    "department": "F&B",
    "title": "Caso de F&B #66",
    "description": "Contaminación cruzada confirmada: un plato para celíacos se preparó en la misma tabla que un panificado regular.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_67",
    "department": "F&B",
    "title": "Caso de F&B #67",
    "description": "Huésped es sorprendido guardando comida del buffet en tuppers dentro de su mochila.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_68",
    "department": "F&B",
    "title": "Caso de F&B #68",
    "description": "Aparece un insecto en la ensalada de un cliente VIP.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_69",
    "department": "F&B",
    "title": "Caso de F&B #69",
    "description": "Cliente ebrio empieza a acosar a otros comensales en el bar del hotel.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_70",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #70",
    "description": "El camión recolector de aceite usado de cocina no pasó, generando un rebalse en el sector de residuos húmedos.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_71",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #71",
    "description": "Rotura de un caño principal de agua justo arriba de la sala de servidores de la propiedad.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_72",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #72",
    "description": "Falla crítica en el sistema de extracción de humo en la cocina, llenando el restaurante de olor a comida.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_73",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #73",
    "description": "El secador de pelo integrado en la pared del baño tira chispas al encenderse.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_74",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #74",
    "description": "Fuerte ruido y vibración proveniente del motor de la cámara frigorífica principal.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_75",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #75",
    "description": "Falla en la puerta giratoria del acceso principal: se quedó atascada.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_76",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #76",
    "description": "Se reporta una invasión de hormigas y pequeños insectos en el solárium de la piscina.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_77",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #77",
    "description": "La cinta de correr principal del gimnasio frena bruscamente mientras un huésped la usa.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_78",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #78",
    "description": "Atasco severo en el ducto vertical de basura (Shut de basura) bloqueando todos los pisos.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_79",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #79",
    "description": "Pantallas de los termostatos táctiles de las habitaciones se descalibran y no marcan la temperatura real.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_80",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #80",
    "description": "Las luces subacuáticas de la piscina exterior presentan agua dentro del armazón.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_81",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #81",
    "description": "Un huésped se retira, y su perro mascota destruyó las patas del sillón de la habitación.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_82",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #82",
    "description": "Una mucama sufre un tirón lumbar severo al intentar voltear un colchón King Size sola.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_83",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #83",
    "description": "Habitación es reportada como \"Limpia y Vacante\" en el sistema, pero el huésped entra y la cama está deshecha.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_84",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #84",
    "description": "Extravío de un manojo de llaves maestras físicas por parte de un supervisor.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_85",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #85",
    "description": "Un huésped encuentra ropa íntima de otra persona olvidada en el cajón de la cómoda.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_86",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #86",
    "description": "Rotura del montacargas exclusivo de lavandería, estancando todos los carros de ropa sucia.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_87",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #87",
    "description": "Mezcla occidental de químicos de limpieza (Lavandina + Amoníaco) en el Office del piso, generando vapores tóxicos.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_88",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #88",
    "description": "Derrame profundo de vino tinto en una alfombra persa en el pasillo del piso presidencial.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_89",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #89",
    "description": "Un huésped importante acusa a Housekeeping de haber tirado documentos (sin triturar) que dejó encima del escritorio.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_90",
    "department": "Gerencia",
    "title": "Caso de Gerencia #90",
    "description": "Falta de personal nocturno para realizar el Turndown Service (servicio de apertura de cama) en la zona VIP.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_91",
    "department": "Gerencia",
    "title": "Caso de Gerencia #91",
    "description": "El tablero central muestra que no se calculan bien las categorías del NPS; algunos detractores figuran como pasivos.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_92",
    "department": "Gerencia",
    "title": "Caso de Gerencia #92",
    "description": "Discrepancia del 15% entre el inventario contable y las botellas reales en la bodega general.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_93",
    "department": "Gerencia",
    "title": "Caso de Gerencia #93",
    "description": "Ausentismo masivo del personal operativo debido a un paro general de transporte urbano.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_94",
    "department": "Gerencia",
    "title": "Caso de Gerencia #94",
    "description": "Demanda laboral de un exempleado por presuntas horas extras no registradas ni pagadas.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_95",
    "department": "Gerencia",
    "title": "Caso de Gerencia #95",
    "description": "Caída drástica del RevPAR de una propiedad del grupo frente al presupuesto del primer trimestre.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_96",
    "department": "Gerencia",
    "title": "Caso de Gerencia #96",
    "description": "Auditoría IT revela que la red WiFi de huéspedes tiene vulnerabilidades graves expuestas a hackers.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_97",
    "department": "Gerencia",
    "title": "Caso de Gerencia #97",
    "description": "Una nueva app interna falla en la adopción porque los jefes de área la encuentran poco intuitiva y prefieren el papel.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_98",
    "department": "Gerencia",
    "title": "Caso de Gerencia #98",
    "description": "Propietarios exigen congelar todas las contrataciones (Freeze hiring) para mejorar el EBITDA, asfixiando la operación en temporada alta.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_99",
    "department": "Gerencia",
    "title": "Caso de Gerencia #99",
    "description": "Fuerte caída en el ranking de TripAdvisor tras un mes de reviews de 2 estrellas enfocadas en fallas de servicio.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_100",
    "department": "Front Desk",
    "title": "Caso de Front Desk #100",
    "description": "Disconformidad gerencial corporativa porque no se enviaron a tiempo los PDF de actas legales de entrega de objetos en el último contingente.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_101",
    "department": "Front Desk",
    "title": "Caso de Front Desk #101",
    "description": "Huésped afirma haber pagado su estadía por adelantado en una agencia fantasma, pero el PMS muestra saldo pendiente.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_102",
    "department": "Front Desk",
    "title": "Caso de Front Desk #102",
    "description": "El sistema duplica por error una reserva y el auditor nocturno cobra un \"No- Show\" a la tarjeta del cliente.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_103",
    "department": "Front Desk",
    "title": "Caso de Front Desk #103",
    "description": "Llegada de un menor de edad no acompañado intentando hacer check-in con la tarjeta de crédito de sus padres.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_104",
    "department": "Front Desk",
    "title": "Caso de Front Desk #104",
    "description": "Maletero daña accidentalmente una maleta rígida de lujo al subirla al carro portaequipajes.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_105",
    "department": "Front Desk",
    "title": "Caso de Front Desk #105",
    "description": "Huésped olvida su equipaje de mano en el lobby y desaparece durante horas.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_106",
    "department": "Front Desk",
    "title": "Caso de Front Desk #106",
    "description": "El conserje da indicaciones erróneas y un turista pierde un tour costoso que no es reembolsable.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_107",
    "department": "Front Desk",
    "title": "Caso de Front Desk #107",
    "description": "Pasajero intenta pagar el saldo de su cuenta con billetes extranjeros visiblemente rotos, manchados o sellados.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_108",
    "department": "Front Desk",
    "title": "Caso de Front Desk #108",
    "description": "Llega un paquete de paquetería urgente para un huésped que hizo check-out el día anterior.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_109",
    "department": "Front Desk",
    "title": "Caso de Front Desk #109",
    "description": "Corte de energía interrumpe específicamente la terminal codificadora de llaves magnéticas (Keycard Encoder).",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_110",
    "department": "F&B",
    "title": "Caso de F&B #110",
    "description": "VIP exige ingresar a su habitación a las 8:00 AM, pero el sistema PMS ya ejecutó la auditoría nocturna.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_111",
    "department": "F&B",
    "title": "Caso de F&B #111",
    "description": "Proveedor de carnes entrega el pedido sin la planilla de registro de temperatura y con pérdida de la cadena de frío.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_112",
    "department": "F&B",
    "title": "Caso de F&B #112",
    "description": "Mesa de 10 personas exige dividir la cuenta ítem por ítem en pleno pico de servicio nocturno.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_113",
    "department": "F&B",
    "title": "Caso de F&B #113",
    "description": "El barril de cerveza artesanal se queda vacío a mitad de servir una pinta, y el de repuesto no está frío.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_114",
    "department": "F&B",
    "title": "Caso de F&B #114",
    "description": "Cliente reclama que su cóctel está \"aguado\" y exige la devolución de su dinero.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_115",
    "department": "F&B",
    "title": "Caso de F&B #115",
    "description": "La impresora de comandas de la cocina se queda sin papel y se pierden tres pedidos.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_116",
    "department": "F&B",
    "title": "Caso de F&B #116",
    "description": "Camarero agrega un 15% de propina al cobro con tarjeta sin la autorización explícita del cliente.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_117",
    "department": "F&B",
    "title": "Caso de F&B #117",
    "description": "Un niño tropieza y rompe un vaso de vidrio cerca de las bandejas del buffet.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_118",
    "department": "F&B",
    "title": "Caso de F&B #118",
    "description": "El inspector de sanidad municipal exige ver las planillas de temperaturas de las cámaras frigoríficas, y no están completas.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_119",
    "department": "F&B",
    "title": "Caso de F&B #119",
    "description": "Un \"influencer\" gastronómico llega sin reserva exigiendo cenar gratis a cambio de una publicación.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_120",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #120",
    "description": "Pedido de Room Service se entrega en una habitación equivocada y el huésped erróneo empieza a consumirlo.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_121",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #121",
    "description": "La bomba principal de agua pierde presión, dejando las duchas de los últimos pisos sin fuerza.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_122",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #122",
    "description": "Un huésped reporta que se le cayó un anillo de compromiso por el desagüe del lavamanos.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_123",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #123",
    "description": "El portón automático del estacionamiento se traba, dejando a 5 autos sin poder salir hacia el aeropuerto.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_124",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #124",
    "description": "Desprendimiento de pintura y manchas de humedad/moho en el pasillo adyacente a la zona de saunas.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_125",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #125",
    "description": "Auditoría interna detecta que los extintores de la cocina principal tienen las obleas vencidas.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_126",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #126",
    "description": "Una tormenta fuerte con granizo rompe el ventanal de una habitación desocupada.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_127",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #127",
    "description": "El sistema centralizado de calefacción no se detiene en un día inusualmente caluroso de otoño.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_128",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #128",
    "description": "Falla el temporizador (timer) de las luces del jardín, dejando la fachada a oscuras toda la noche.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_129",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #129",
    "description": "Huésped no recuerda la clave de su caja fuerte y su pasaporte está adentro, faltando 1 hora para su vuelo.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_130",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #130",
    "description": "Olor nauseabundo proveniente de la trampa de grasa de la cocina invade el comedor.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_131",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #131",
    "description": "Una mucama encuentra un arma de fuego no declarada en la mesa de luz durante la limpieza diaria.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_132",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #132",
    "description": "Lavadora industrial se descompone a mitad del ciclo dejando sábanas empapadas y sucias.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_133",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #133",
    "description": "Huésped acusa a la mucama de haber tirado una bolsa de compras vacía que él \"guardaba de recuerdo\".",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_134",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #134",
    "description": "Falta de uniformes de recambio genera que el personal de piso use prendas rotas o manchadas de lavandina.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_135",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #135",
    "description": "Toallas blancas de felpa severamente manchadas con tinte de pelo negro por una pasajera.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_136",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #136",
    "description": "Una aspiradora en cortocircuito hace saltar la térmica, dejando sin luz a todo un pasillo de habitaciones.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_137",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #137",
    "description": "El carro de limpieza rueda por una pendiente leve y raya profundamente la puerta de madera de una Suite.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_138",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #138",
    "description": "Queja por olor insoportable en una habitación limpia; se descubre un pañal sucio escondido detrás del televisor.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_139",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #139",
    "description": "Mucama finaliza la limpieza pero olvida cerrar la puerta, dejando la habitación expuesta por horas con objetos de valor dentro.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_140",
    "department": "Gerencia",
    "title": "Caso de Gerencia #140",
    "description": "VIP con asma solicita almohadas hipoalergénicas, pero no hay stock en la ropería central.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_141",
    "department": "Gerencia",
    "title": "Caso de Gerencia #141",
    "description": "El dashboard de gestión interno arroja un Error 500 al procesar las encuestas del mes, impidiendo ver las métricas clave.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_142",
    "department": "Gerencia",
    "title": "Caso de Gerencia #142",
    "description": "Un restaurante de la competencia inicia una campaña agresiva para robarse (poaching) al Chef Ejecutivo y sous-chefs.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_143",
    "department": "Gerencia",
    "title": "Caso de Gerencia #143",
    "description": "La matriz corporativa impone un recorte de presupuesto del 15% a mitad de temporada alta sin previo aviso.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_144",
    "department": "Gerencia",
    "title": "Caso de Gerencia #144",
    "description": "La cuenta de Instagram del hotel sufre un hackeo y se publican estafas de criptomonedas a los seguidores.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_145",
    "department": "Gerencia",
    "title": "Caso de Gerencia #145",
    "description": "Un proveedor clave de lavandería retiene la entrega de blancos porque contaduría adeuda tres facturas.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_146",
    "department": "Gerencia",
    "title": "Caso de Gerencia #146",
    "description": "Huésped amenaza con una demanda millonaria tras tropezar con una baldosa suelta en el lobby.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_147",
    "department": "Gerencia",
    "title": "Caso de Gerencia #147",
    "description": "Falla en la integración (API) entre el Channel Manager y el motor de reservas, generando múltiples sobreventas (Overbooking).",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_148",
    "department": "Gerencia",
    "title": "Caso de Gerencia #148",
    "description": "Una encuesta de clima laboral anónima revela maltrato sistémico y acoso por parte del Jefe de Mantenimiento.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_149",
    "department": "Gerencia",
    "title": "Caso de Gerencia #149",
    "description": "La municipalidad inicia obras cortando el tráfico en la calle principal del hotel por un mes, afectando la llegada.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_150",
    "department": "Front Desk",
    "title": "Caso de Front Desk #150",
    "description": "Empresa multinacional amenaza con llevar su convención anual a la competencia debido a cortes en el Wi-Fi.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_151",
    "department": "Front Desk",
    "title": "Caso de Front Desk #151",
    "description": "Huésped exige la misma habitación en la que se hospedó hace 5 años, pero actualmente está en remodelación.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_152",
    "department": "Front Desk",
    "title": "Caso de Front Desk #152",
    "description": "Se recibe un pago con tarjeta de crédito que la terminal POS arroja como \"Robada / Retener Tarjeta\".",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_153",
    "department": "Front Desk",
    "title": "Caso de Front Desk #153",
    "description": "El sistema de asignación de habitaciones coloca a una pareja de luna de miel en camas individuales (Twin).",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_154",
    "department": "Front Desk",
    "title": "Caso de Front Desk #154",
    "description": "Huésped extranjero llega sin sello de ingreso al país y la policía migratoria lo busca en el hotel.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_155",
    "department": "Front Desk",
    "title": "Caso de Front Desk #155",
    "description": "Se agotan los paraguas de cortesía en un día de lluvia torrencial y los huéspedes exigen salir.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_156",
    "department": "Front Desk",
    "title": "Caso de Front Desk #156",
    "description": "Cliente regular llega con una mascota exótica (ej. un reptil) no permitida por la política \"Pet-Friendly\" (solo perros/gatos).",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_157",
    "department": "Front Desk",
    "title": "Caso de Front Desk #157",
    "description": "El transporte de la tripulación de una aerolínea se retrasa, dejando a 20 pilotos/azafatas estancados en el lobby de madrugada.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_158",
    "department": "Front Desk",
    "title": "Caso de Front Desk #158",
    "description": "Huésped reporta que clonaron su tarjeta durante su estadía y culpa abiertamente al recepcionista.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_159",
    "department": "Front Desk",
    "title": "Caso de Front Desk #159",
    "description": "Falla la impresora fiscal al momento de emitir la factura a un cliente corporativo que se va urgente al aeropuerto.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_160",
    "department": "F&B",
    "title": "Caso de F&B #160",
    "description": "Llega un arreglo floral inmenso y anónimo para un huésped que exigió privacidad estricta (Incógnito).",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_161",
    "department": "F&B",
    "title": "Caso de F&B #161",
    "description": "Se derrama una olla de sopa de 20 litros en el suelo de la cocina en pleno despacho de cenas.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_162",
    "department": "F&B",
    "title": "Caso de F&B #162",
    "description": "Cliente acusa intoxicación alimentaria un día después de haber comido mariscos en el restaurante.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_163",
    "department": "F&B",
    "title": "Caso de F&B #163",
    "description": "Proveedor de panificados entrega productos aplastados y humedecidos justo antes del desayuno de un evento.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_164",
    "department": "F&B",
    "title": "Caso de F&B #164",
    "description": "Camarero sirve una bebida alcohólica fuerte por error a un menor de edad en una mesa familiar numerosa.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_165",
    "department": "F&B",
    "title": "Caso de F&B #165",
    "description": "Cliente pide un vino premium y al descorcharlo el sommelier nota que huele a humedad (enfermedad del corcho / TCA).",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_166",
    "department": "F&B",
    "title": "Caso de F&B #166",
    "description": "El hielo de las máquinas expendedoras o del bar sale con pequeñas partículas negras de suciedad.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_167",
    "department": "F&B",
    "title": "Caso de F&B #167",
    "description": "Dos camareros chocan en las puertas batientes y rompen toda la vajilla sucia de un carro en medio del salón.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_168",
    "department": "F&B",
    "title": "Caso de F&B #168",
    "description": "Huésped exige que en la cocina del hotel le preparen un pescado crudo que él mismo pescó esa mañana.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_169",
    "department": "F&B",
    "title": "Caso de F&B #169",
    "description": "Falla el sistema de comandas en monitores (KDS) y se apagan las pantallas en pleno servicio de cena.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_170",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #170",
    "description": "Cliente diabético sufre una descompensación (hipoglucemia) en el restaurante.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_171",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #171",
    "description": "Inodoro de una habitación VIP se desborda continuamente y el agua residual llega a la alfombra.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_172",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #172",
    "description": "Ruptura de un ventanal grande en la terraza del piso 10 por fuertes ráfagas de viento.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_173",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #173",
    "description": "Los paneles solares térmicos del techo dejan de calentar el agua de la piscina climatizada en pleno invierno.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_174",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #174",
    "description": "Olor constante a gas refrigerante escapando de los ductos del aire acondicionado central.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_175",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #175",
    "description": "Se rompe la bisagra hidráulica de la puerta principal de la cocina, y queda abierta de par en par.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_176",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #176",
    "description": "Las bombas dosificadoras de cloro del spa inyectan químicos en exceso por una falla en el sensor electrónico.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_177",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #177",
    "description": "La alarma de monóxido de carbono suena insistentemente en el estacionamiento subterráneo.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_178",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #178",
    "description": "Falla la presurización de la red de incendio (sprinklers) y empiezan a gotear en los pasillos de las habitaciones.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_179",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #179",
    "description": "Falla el motor principal del montacargas de servicio y se atascan los insumos del desayuno en el piso bajo.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_180",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #180",
    "description": "Un ave queda atrapada en los conductos de ventilación generando aleteos y quejas de los huéspedes.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_181",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #181",
    "description": "Se descubre que una habitación no bloqueada fue usada clandestinamente por personal para dormir.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_182",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #182",
    "description": "Huésped reporta un sarpullido severo y acusa al detergente industrial usado en las sábanas del hotel.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_183",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #183",
    "description": "Faltante de 20 almohadas de plumas tras el check-out de un grupo escolar o deportivo.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_184",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #184",
    "description": "Mucama encuentra envases de medicamentos controlados abiertos y al alcance en una habitación con niños pequeños.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_185",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #185",
    "description": "El ducto de recolección de ropa sucia (shut de lencería) se traba completamente entre dos pisos.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_186",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #186",
    "description": "El proveedor entrega envases de químicos a granel sin etiquetas de seguridad y de colores dudosos.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_187",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #187",
    "description": "Huésped mancha la pared empapelada de la habitación con pomada negra al lustrar sus zapatos contra el zócalo.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_188",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #188",
    "description": "Carro de limpieza rueda y daña un valioso jarrón decorativo del pasillo de la suite presidencial.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_189",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #189",
    "description": "Mucama sufre un corte en la mano al recoger vidrios de una botella rota que un huésped escondió adrede bajo la cama.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_190",
    "department": "Gerencia",
    "title": "Caso de Gerencia #190",
    "description": "Faltante masivo de papel higiénico en el depósito general del piso por error de inventario del fin de semana.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_191",
    "department": "Gerencia",
    "title": "Caso de Gerencia #191",
    "description": "El gerente comercial firma un contrato con una OTA (Agencia Online) que incluye cláusulas de paridad abusivas, bloqueando la venta directa.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_192",
    "department": "Gerencia",
    "title": "Caso de Gerencia #192",
    "description": "Un pronóstico de huracán/tormenta severa obliga a decidir si evacuar el hotel y cancelar 300 reservas o mantener la operación.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_193",
    "department": "Gerencia",
    "title": "Caso de Gerencia #193",
    "description": "Caída drástica del 30% en el ratio de ocupación mensual sin motivos de estacionalidad aparente en el mercado.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_194",
    "department": "Gerencia",
    "title": "Caso de Gerencia #194",
    "description": "Conflicto severo entre áreas: Housekeeping acusa a Recepción de sobrevender y no darles tiempo a limpiar (ventas en falso).",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_195",
    "department": "Gerencia",
    "title": "Caso de Gerencia #195",
    "description": "Se viraliza una \"Fake News\" en redes de que el hotel entrará en quiebra y los proveedores exigen pago de contado anticipado.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_196",
    "department": "Gerencia",
    "title": "Caso de Gerencia #196",
    "description": "Una auditoría fiscal gubernamental sorpresa requiere documentación de hace",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_197",
    "department": "Gerencia",
    "title": "Caso de Gerencia #197",
    "description": "La implementación de un nuevo motor de reservas propio resulta en una caída del 50% de la conversión web por fallos en el pago.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_198",
    "department": "Gerencia",
    "title": "Caso de Gerencia #198",
    "description": "La propiedad pide duplicar el presupuesto de marketing pagándolo mediante el recorte del 100% de los incentivos al personal.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_199",
    "department": "Gerencia",
    "title": "Caso de Gerencia #199",
    "description": "Aumento abrupto y no presupuestado de los impuestos municipales sobre propiedades comerciales del 40%.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_200",
    "department": "Front Desk",
    "title": "Caso de Front Desk #200",
    "description": "Fuga de datos masiva: hackers vulneran la base de datos de los huéspedes robando nombres, emails y datos de tarjetas por negligencia de un proveedor externo.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_201",
    "department": "Front Desk",
    "title": "Caso de Front Desk #201",
    "description": "Huésped llega con un comprobante de reserva falso generado por una estafa en redes sociales (ej. perfil falso en Facebook).",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_202",
    "department": "Front Desk",
    "title": "Caso de Front Desk #202",
    "description": "La impresora de tarjetas magnéticas se queda sin insumos (tarjetas vírgenes) en pleno check-in de un contingente.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_203",
    "department": "Front Desk",
    "title": "Caso de Front Desk #203",
    "description": "Cliente extranjero exige pagar en dólares físicos exigiendo una tasa de cambio \"paralela\" o no oficial.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_204",
    "department": "Front Desk",
    "title": "Caso de Front Desk #204",
    "description": "Un visitante pide la llave o acceso a la habitación de un huésped argumentando ser su \"asistente personal\".",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_205",
    "department": "Front Desk",
    "title": "Caso de Front Desk #205",
    "description": "El conserje tercerizado recomienda un área insegura de la ciudad y el turista sufre un robo.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_206",
    "department": "Front Desk",
    "title": "Caso de Front Desk #206",
    "description": "Huésped se ofende visiblemente porque el recepcionista no utilizó sus pronombres correctos o título académico (ej. Doctor).",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_207",
    "department": "Front Desk",
    "title": "Caso de Front Desk #207",
    "description": "Una mujer embarazada solicita atención médica de urgencia por contracciones tempranas en el lobby.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_208",
    "department": "Front Desk",
    "title": "Caso de Front Desk #208",
    "description": "Se cae el servidor de correos electrónicos del hotel, perdiendo contacto temporal con las OTA's y reservas del día.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_209",
    "department": "Front Desk",
    "title": "Caso de Front Desk #209",
    "description": "Huésped con movilidad reducida (silla de ruedas) llega y descubre que no se le asignó la habitación adaptada que solicitó.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_210",
    "department": "F&B",
    "title": "Caso de F&B #210",
    "description": "Discusión a gritos e insultos entre dos huéspedes en el área de recepción por un choque en el estacionamiento.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_211",
    "department": "F&B",
    "title": "Caso de F&B #211",
    "description": "El proveedor de lácteos entrega decenas de litros de leche que vencen al día siguiente.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_212",
    "department": "F&B",
    "title": "Caso de F&B #212",
    "description": "Un cliente solicita comida Kosher certificada, pero el hotel no cuenta con cocina ni vajilla separada.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_213",
    "department": "F&B",
    "title": "Caso de F&B #213",
    "description": "Se rompe el motor de la licuadora industrial del bar en medio de un evento con coctelería \"frozen\".",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_214",
    "department": "F&B",
    "title": "Caso de F&B #214",
    "description": "Comensal se atraganta con un trozo de comida en el restaurante y no puede respirar.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_215",
    "department": "F&B",
    "title": "Caso de F&B #215",
    "description": "Un mozo tropieza y derrama una bandeja de café sobre el material de presentación de un evento corporativo.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_216",
    "department": "F&B",
    "title": "Caso de F&B #216",
    "description": "La campana de extracción de grasa satura sus filtros y gotea aceite hirviendo sobre una freidora.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_217",
    "department": "F&B",
    "title": "Caso de F&B #217",
    "description": "Cliente exige llevar su propia botella de vino premium a la cena y se niega categóricamente a pagar el cargo por descorche.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_218",
    "department": "F&B",
    "title": "Caso de F&B #218",
    "description": "Faltante crítico de vasos limpios en el desayuno por rotura de la bomba del lavavajillas de cristal.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_219",
    "department": "F&B",
    "title": "Caso de F&B #219",
    "description": "Un mesero le prohíbe el ingreso al restaurante a un perro guía (lazarillo) de un cliente no vidente.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_220",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #220",
    "description": "El buffet de postres se queda sin opciones libres de azúcar a los 10 minutos de abrir el turno.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_221",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #221",
    "description": "El agua de la piscina interior amanece turbia y de color verde por un fallo en el retrolavado del filtro de arena.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_222",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #222",
    "description": "La llave de paso general de gas de una sección de calderas se oxida y se atasca, impidiendo el corte manual.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_223",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #223",
    "description": "Tres televisores LED de un mismo piso se queman simultáneamente tras una tormenta eléctrica.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_224",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #224",
    "description": "Falla la cerradura electromagnética de la puerta principal de blindex (lobby), dejando el hotel vulnerable durante la noche.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_225",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #225",
    "description": "Un huésped rompe accidentalmente la pantalla táctil del termostato digital de pared con el golpe de una maleta.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_226",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #226",
    "description": "El sistema de riego automático del jardín se desconfigura y enciende a las",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_227",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #227",
    "description": "Desprendimiento de baldosas antideslizantes en el borde de la piscina, creando un filo peligroso.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_228",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #228",
    "description": "El ascensor de servicio produce un chirrido metálico muy agudo de madrugada que despierta a las habitaciones cercanas.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_229",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #229",
    "description": "Las luces de emergencia de las escaleras de incendios tienen las baterías agotadas y no encienden durante una prueba.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_230",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #230",
    "description": "Se reporta un panal de avispas gigante en uno de los árboles principales del área de estacionamiento/jardín.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_231",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #231",
    "description": "Una mucama desecha por error un costoso retenedor dental (ortodoncia) que el huésped dejó envuelto en una servilleta de papel.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_232",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #232",
    "description": "La máquina lavadora-extractora de alfombras perfora una manguera e inunda el pasillo del piso 4.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_233",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #233",
    "description": "Huésped se retira y deja la habitación repleta de jeringas y agujas usadas (ej. medicación) fuera del descartador.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_234",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #234",
    "description": "Rotura masiva de perchas de madera (robos o destrozos) en los armarios tras la salida de un grupo de estudiantes.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_235",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #235",
    "description": "El proveedor de limpieza entrega un lote de suavizante de ropa industrial con olor rancio o a humedad.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_236",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #236",
    "description": "Faltante misterioso e inexplicable de secadores de pelo portátiles en 5 habitaciones del mismo piso.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_237",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #237",
    "description": "Durante el repaso de la tarde, la mucama descubre un gato escondido en el armario en un hotel 100% libre de mascotas.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_238",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #238",
    "description": "Aumento de licencias médicas por alergias respiratorias del personal de piso por falta de mantenimiento en los filtros de las aspiradoras.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_239",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #239",
    "description": "Huésped utiliza toallas blancas de felpa egipcia para limpiar el barro profundo y la grasa de su bicicleta de montaña.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_240",
    "department": "Gerencia",
    "title": "Caso de Gerencia #240",
    "description": "El carro central de lencería pierde una rueda por exceso de peso y vuelca en el lobby principal frente a los clientes.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_241",
    "department": "Gerencia",
    "title": "Caso de Gerencia #241",
    "description": "Un inspector de bomberos amenaza con clausurar un salón de eventos por exceder en 50 personas la capacidad máxima permitida (aforo).",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_242",
    "department": "Gerencia",
    "title": "Caso de Gerencia #242",
    "description": "El banco rechaza el pago de las nóminas (sueldos) del personal un viernes a la tarde por un error en el archivo de transferencias.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_243",
    "department": "Gerencia",
    "title": "Caso de Gerencia #243",
    "description": "Caída abrupta del ADR (Tarifa Promedio Diaria) por un error tipográfico en la matriz de precios del Channel Manager (ej. vender a $15 en vez de $150).",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_244",
    "department": "Gerencia",
    "title": "Caso de Gerencia #244",
    "description": "Auditoría interna descubre que el Jefe de Compras contrata sistemáticamente a la empresa de su cuñado como proveedor sin licitación y con sobreprecios.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_245",
    "department": "Gerencia",
    "title": "Caso de Gerencia #245",
    "description": "Un influencer con 3 millones de seguidores hace una transmisión en vivo quejándose amargamente de la baja velocidad del internet del hotel.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_246",
    "department": "Gerencia",
    "title": "Caso de Gerencia #246",
    "description": "Renuncia masiva de 3 recepcionistas clave el mismo día, alegando agotamiento (burnout) por turnos rotativos caóticos.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_247",
    "department": "Gerencia",
    "title": "Caso de Gerencia #247",
    "description": "El competidor directo lanza un paquete \"All Inclusive\" al mismo precio que nuestro plan \"Bed & Breakfast\", robando la demanda.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_248",
    "department": "Gerencia",
    "title": "Caso de Gerencia #248",
    "description": "Se descubre tras un robo que el sistema de cámaras de seguridad (DVR/CCTV) lleva un mes con el disco rígido lleno sin grabar y nadie lo sabía.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_249",
    "department": "Gerencia",
    "title": "Caso de Gerencia #249",
    "description": "Los propietarios ordenan recortar en un 80% el presupuesto de mantenimiento preventivo para aumentar sus dividendos trimestrales.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_250",
    "department": "Front Desk",
    "title": "Caso de Front Desk #250",
    "description": "Notificación de una demanda civil y mediación del Ministerio de Trabajo por presunta discriminación durante el despido de un exempleado.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_251",
    "department": "Front Desk",
    "title": "Caso de Front Desk #251",
    "description": "Walk-in de madrugada pide habitación, pero el PMS está en medio de un mantenimiento programado (caída de servidor).",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_252",
    "department": "Front Desk",
    "title": "Caso de Front Desk #252",
    "description": "Huésped se niega a dejar tarjeta de crédito en garantía, solo ofrece efectivo pero no cubre posibles daños.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_253",
    "department": "Front Desk",
    "title": "Caso de Front Desk #253",
    "description": "Recepción recibe una notificación legal (carta documento) dirigida a un huésped que ya hizo check-out.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_254",
    "department": "Front Desk",
    "title": "Caso de Front Desk #254",
    "description": "Cliente corporativo se queja de que el WiFi es muy lento para una videollamada de negocios crítica.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_255",
    "department": "Front Desk",
    "title": "Caso de Front Desk #255",
    "description": "Huésped reporta la pérdida de una campera y exige una constancia formal del reclamo para su seguro.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_256",
    "department": "Front Desk",
    "title": "Caso de Front Desk #256",
    "description": "Sobreventa (overbooking) en la categoría Standard; solo quedan Suites Presidenciales vacías.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_257",
    "department": "Front Desk",
    "title": "Caso de Front Desk #257",
    "description": "Huésped solicita factura a nombre de una empresa exenta de impuestos pero no trae el certificado de exención.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_258",
    "department": "Front Desk",
    "title": "Caso de Front Desk #258",
    "description": "Grupo de egresados hace ruido insoportable en el lobby a las 2 AM, molestando a las habitaciones del primer piso.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_259",
    "department": "Front Desk",
    "title": "Caso de Front Desk #259",
    "description": "Huésped extranjero sufre el robo de su pasaporte en la calle y necesita tomar un vuelo mañana.",
    "options": [],
    "icon": "UserCheck",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_260",
    "department": "F&B",
    "title": "Caso de F&B #260",
    "description": "Falla la placa electrónica de la puerta principal y nadie puede entrar o salir del hotel de forma automatizada.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_261",
    "department": "F&B",
    "title": "Caso de F&B #261",
    "description": "Cliente con dieta estricta cetogénica (Keto) no encuentra opciones adecuadas en el menú de Room Service.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_262",
    "department": "F&B",
    "title": "Caso de F&B #262",
    "description": "Corte de agua municipal repentino en pleno banquete de 500 personas impide el lavado de vajilla para el segundo plato.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_263",
    "department": "F&B",
    "title": "Caso de F&B #263",
    "description": "Inspección interna bromatológica encuentra que las tablas de cortar en cocina no están separadas por colores.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_264",
    "department": "F&B",
    "title": "Caso de F&B #264",
    "description": "Cliente devuelve un vino costoso argumentando que está \"picado\", pero el sommelier verifica discretamente que el vino está en perfectas condiciones.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_265",
    "department": "F&B",
    "title": "Caso de F&B #265",
    "description": "El proveedor de hielo se retrasa y la máquina del hotel está averiada un viernes a la noche.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_266",
    "department": "F&B",
    "title": "Caso de F&B #266",
    "description": "Un camarero derrama sopa caliente sobre la notebook de un cliente que trabajaba en el restaurante.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_267",
    "department": "F&B",
    "title": "Caso de F&B #267",
    "description": "Faltante masivo de cubiertos de plata del salón tras un evento privado corporativo.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_268",
    "department": "F&B",
    "title": "Caso de F&B #268",
    "description": "Comensal vegano encuentra un trozo de tocino escondido en su ensalada \"100% plant-based\".",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_269",
    "department": "F&B",
    "title": "Caso de F&B #269",
    "description": "Salta la térmica de las heladeras de postres en la cafetería y se pierde la cadena de frío durante la madrugada.",
    "options": [],
    "icon": "Coffee",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_270",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #270",
    "description": "Cliente se levanta y se va sin pagar (simula ir al baño) en una mesa exterior de la terraza.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_271",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #271",
    "description": "Fuga en un caño de agua cloacal sobre el falso techo de yeso (cielo raso) del restaurante principal.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_272",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #272",
    "description": "Ascensor de servicio se frena entre pisos y el intercomunicador de emergencia está desconectado.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_273",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #273",
    "description": "Termotanque central sufre una microfisura y el agua caliente sale con sedimentos de óxido en las duchas.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_274",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #274",
    "description": "Sistema de climatización central (Chiller) tira aire caliente en pleno enero por falta de gas refrigerante.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_275",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #275",
    "description": "Se quema la bomba sumergible de la piscina exterior y el agua no filtra hace",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_276",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #276",
    "description": "Huésped se queja de un \"pitido eléctrico\" constante en la pared que no lo deja dormir.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_277",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #277",
    "description": "Fuerte olor a quemado y humo proveniente del tablero eléctrico general en el subsuelo.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_278",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #278",
    "description": "Rotura del mecanismo automático de las puertas corredizas de la entrada principal.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_279",
    "department": "Mantenimiento",
    "title": "Caso de Mantenimiento #279",
    "description": "Inundación en el cuarto de bombas debido a una válvula de retención que reventó.",
    "options": [],
    "icon": "Wrench",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_280",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #280",
    "description": "Sistema de extracción de monóxido del estacionamiento no arranca en automático al llegar a niveles tóxicos.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_281",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #281",
    "description": "Mucama reporta que la caja fuerte de una habitación desocupada (check-out) quedó bloqueada y cerrada.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_282",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #282",
    "description": "Huésped fumó en una habitación de no fumadores y quemó la colcha principal de la cama.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_283",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #283",
    "description": "Rotura de las ruedas de varios carros de limpieza dificultando el empuje por alfombras gruesas.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_284",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #284",
    "description": "Desabastecimiento de amenidades líquidas (shampoo/jabón) para los dispensers recargables de las duchas.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_285",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #285",
    "description": "Se encuentra un fajo grande de dinero en efectivo suelto debajo del colchón durante una limpieza profunda.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_286",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #286",
    "description": "Mucama sufre una reacción alérgica grave en la piel por utilizar desengrasante puro sin guantes.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_287",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #287",
    "description": "Huésped se queja de que le tiraron a la basura un vaso térmico negro de diseño creyendo que era descartable.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_288",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #288",
    "description": "Almohadas de pluma llegan de la lavandería externa con un fortísimo olor a humedad por mal secado.",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_289",
    "department": "Housekeeping",
    "title": "Caso de Housekeeping #289",
    "description": "Rotura espontánea del cristal templado de la mampara de baño, estallando en mil pedazos dentro de la bañera (sin huéspedes).",
    "options": [],
    "icon": "Sparkles",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_290",
    "department": "Gerencia",
    "title": "Caso de Gerencia #290",
    "description": "Cortinas blackout de una suite presidencial se desprenden del riel superior bloqueando la ventana.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_291",
    "department": "Gerencia",
    "title": "Caso de Gerencia #291",
    "description": "El dashboard del Tremun Quality Center (NPS) procesa erróneamente las encuestas con puntaje de 8 como \"Promotores\" debido a una regla de cálculo desactualizada.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_292",
    "department": "Gerencia",
    "title": "Caso de Gerencia #292",
    "description": "Se implementa una actualización de código (Front-end) en la web de reservas, pero el diseño resultante rompe la interfaz móvil y los textos se superponen.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_293",
    "department": "Gerencia",
    "title": "Caso de Gerencia #293",
    "description": "Huelga sorpresiva de recolectores de basura urbanos deja los contenedores del hotel rebalsados por 4 días.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_294",
    "department": "Gerencia",
    "title": "Caso de Gerencia #294",
    "description": "El proveedor del PMS (Software Hotelero) sufre un ciberataque de ransomware a nivel global, paralizando todos los accesos.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_295",
    "department": "Gerencia",
    "title": "Caso de Gerencia #295",
    "description": "Un hotel de la misma cadena tiene márgenes operativos (GOP) mucho más altos, y gerencia regional exige explicaciones por nuestro bajo rendimiento.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_296",
    "department": "Gerencia",
    "title": "Caso de Gerencia #296",
    "description": "Aumento vertiginoso de quejas por demoras en la recepción; Recursos Humanos reporta una rotación de recepcionistas del 60% semestral.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_297",
    "department": "Gerencia",
    "title": "Caso de Gerencia #297",
    "description": "Reclamo sindical exige mejoras inmediatas en el menú del comedor de personal por considerar que tiene bajo valor nutritivo.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_298",
    "department": "Gerencia",
    "title": "Caso de Gerencia #298",
    "description": "Notificación de una multa municipal gravísima por ruidos molestos reiterados provenientes del \"Rooftop Bar\" (Terraza).",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_299",
    "department": "Gerencia",
    "title": "Caso de Gerencia #299",
    "description": "La OTA principal (ej. Booking) penaliza al hotel bajándolo a la página 4 de resultados por tener una altísima tasa de cancelaciones.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  },
  {
    "id": "sit_300",
    "department": "Gerencia",
    "title": "Caso de Gerencia #300",
    "description": "Caída masiva de los servidores en la nube (AWS/Google Cloud) donde se alojan los paneles de control de métricas de gerencia.",
    "options": [],
    "icon": "LineChart",
    "isAudioResponse": true,
    "isOpenEnded": false
  }
];

module.exports = situations;
