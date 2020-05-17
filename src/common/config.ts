import dotenv from 'dotenv'

dotenv.config()

const config = {
    PORT: Number(process.env.PORT || 8000),
    VERSION: process.env.VERSION || "v1",
    DB: process.env.DB || "mongodb://localhost:27017/movies",
    secret: process.env.SECRET || 'secret12345'
}

export default config;