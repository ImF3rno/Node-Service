# Services api

## Get all
### Method:GET
```
http://localhost:8888/api/v1/services
```

## Signup
### Method:POST
```
http://localhost:8888/api/v1/users/signup
{
    "name":"Example",
    "email":"Example@gmail.lt",
    "password":"Example",
    "passwordConfirm":"Example"
}
```

## Log in
### Method:POST
```
http://localhost:8888/api/v1/users/login
{
    "name":"Example",
    "email":"Example@gmail.lt",
    "password":"Example",
    "passwordConfirm":"Example"
}
```

## Create service
### Method:POST
```
http://localhost:8888/api/v1/services
{
    "name":"HVAC Services",
    "address":"222 Maple Street, Hillside, JKL",
    "leader":"David Wilson"
}
```

## By id service
### Method:GET
```
http://localhost:8888/api/v1/services/:id
```

## Update service
### Method:PATCH
```
http://localhost:8888/api/v1/services/:id
{
    "name":"Example"
}
```

## Delete service
### Method:DEL
```
http://localhost:8888/api/v1/services/:id
```

## Update foreman
### Method:PATCH
```
http://localhost:8888/api/v1/foreman/:id
{
    "city":"Example"
}
```

## Create foreman
### Method:POST
```
http://localhost:8888/api/v1/foreman
{
  "serviceId": "65e6f034968305c38b4f4027",
  "name": "Alice",
  "lastname": "Johnson",
  "specialty": "Plumbing",
  "photo": "alice_johnson_photo.jpg",
  "city": "Los Angeles"
}
```

## Delete foreman
### Method:DELETE
```
http://localhost:8888/api/v1/foreman/:id
```
