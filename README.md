# Reserva Test

## Explicación del proyecto

Decidí realizar los siguientes Endpoints para el proyecto.

### Crear una reserva (POST /reservas)

Este endpoint permitirá realizar una reservación en el hotel con los datos iniciales para realizar la misma como ser:

- detallesCuarto
- diasEstadia
- identificacionCliente (Para este proyecto esto se toma como el nómbre del cliente).

Esta reserva contará con un identificador único y al momento de ser creada se le dará un estado de Pendiente.

### Obtener todas las reservas (GET /reservas)

Este endpoint permitirá listar todas las reservas que ha sido realizadas con los datos de la factura en caso de que haya sido pagada la reserva.

### Obtener una reserva específica (GET /reservas/:id)

Este endpoint permitirá ver el detalle de una reserva según su identificador con los datos de la factura en caso de que haya sido pagada la reserva, el ID de la reserva debe ser enviado por la url.

### Actualizar una reserva (PUT /reservas/:id)

Este endpoint permitirá actualizar una reserva existente,  el ID de la reserva debe ser enviado por la url para indicar que reserva se desea actualizar, los datos que permite editar son

- detallesCuarto
- diasEstadia
- identificacionCliente

### Eliminar una reserva (DELETE /reservas/:id)

Este endpoint permitirá cambiar el estado de una reserva existente a Eliminado,  el ID de la reserva debe ser enviado por la url para indicar que reserva se desea eliminar.

### Pagar una reserva (POST /reservas/:id/pagar)

Este endpoint permitirá marcar una reserva como pagada cambiando el estado de la misma y creando la factura correspondiente, el ID de la reserva debe ser enviado por la url para indicar que reserva se desea pagar.

Los datos que se deben enviar son:

- nit
- razonSocial
- metodoPago
- montoPagado

También actualiza el estado de la reserva a Pagado.

## Ejecución del proyecto

### Comandos

```bash
# realizar un git clone al siguiente repo
https://github.com/vinder11/reserva
# Tener instalado previamente docker y docker-compose
docker-compose up -d
# el proyecto estará corriendo en
http://localhost:3000
# la base de datos estará corriendo en 
http://localhost:3306
# para bajar el proyecto
docker-compose down
```

## Request

Aquí se lista como hacer las llamadas a los Endpoints pero adicionalmente en la raíz del proyecto se añade un archivo postman_collection.json para importar las llamadas en postman.

### Listar todas la reservsa

- [http://localhost:3000/reservas](http://localhost:3000/reservas)

### Listar el detalle de una reserva por Id

- [http://localhost:3000/reservas/1](http://localhost:3000/reservas/1)

### Crear una reserva

- [http://localhost:3000/reservas](http://localhost:3000/reservas)
    
    ```json
    {
        "detallesCuarto": "Una cama para una persona",
        "diasEstadia": 2,
        "identificacionCliente": "Laura Bozo"
    }
    ```
    

### Actualizar los datos de una reserva

- [http://localhost:3000/reservas/1](http://localhost:3000/reservas/1)
    
    ```json
    {
        "detallesCuarto": "Cuarto de 2 camas individuales",
        "diasEstadia": 4,
        "identificacionCliente": "David Salas"
    }
    ```
    

### Eliminar una reserva

- [http://localhost:3000/reservas/1](http://localhost:3000/reservas/1)

### Realizar el pago de una reserva

- [http://localhost:3000/reservas/1/pago](http://localhost:3000/reservas/1/pago)
    
    ```json
    {
        "nit":"9823345",
        "razonSocial":"Terrasur SRL",
        "metodoPago": "Efectivo",
        "montoPagado": 250
    }
    ```