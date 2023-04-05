
## API Reference

#### Get auth token

```http
  POST /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your username |
| `password` | `string` | **Required**. Your password |

#### Create a new ad

```http
  GET /cars/create (Bearer Protected)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nomLoueur`      | `string` | **Required**. Rental name   |
| `email`      | `string` | **Required**. Email |
| `marque`      | `string` | **Required**. Car Brand |
| `modele`      | `string` | **Required**. Car Model |
| `annee`      | `int` | **Required**. Vehicle Year |
| `cityId`      | `string` | **Required**. CityName |
| `prix`      | `int` | **Required**. Rental price |
| `photo`      | `string` | **Required**. Path od the picture |

#### Get all ads

```http
  GET /cars/all (Bearer Protected)
```