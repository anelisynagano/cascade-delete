



# Express + MySQL boilerplate

## Run the app locally (in development):
```
yarn dev
```
note: there's a `yarn start` but that is for **production**

## Add your MySQL credentials
Create a file in the root of the project called `keys.js` with the following:

```
const keys = {
    MYSQL_USERNAME:  'my_username',
    MYSQL_PASSWORD:  'super_secret_password'
}

module.exports = keys;
```

## Instructions:
- Create db and seed
- Seed with 2 teams, 3 riders each, 2 motorcycles each
- Create endpoint to delete

Motorcycle races
- A rider can have many motorcycles
- A motorcycle belongs to one rider
- A team can have many riders
- A rider can be in only one team
- If you delete a team the riders and the motorcycles get deleted too (mySql DELETE CASCADE)