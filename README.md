
## API Reference

#### Get auth token

```
  POST /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your username |
| `password` | `string` | **Required**. Your password |

#### Create a new ad

```
  GET /cars/create (Bearer Protected)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nomLoueur`      | `string` | **Required**. Rental name   |
| `email`      | `string` | **Required**. Email |
| `marque`      | `string` | **Required**. Car Brand |
| `modele`      | `string` | **Required**. Car Model |
| `annee`      | `string` | **Required**. Vehicle Year |
| `cityId`      | `string` | **Required**. CityName |
| `prix`      | `int` | **Required**. Rental price |
| `photo`      | `string` | **Required**. Path od the picture |

#### Get all ads

```
  GET /cars/all (Bearer Protected)
```
