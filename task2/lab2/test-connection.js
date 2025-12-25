const mongoose = require('mongoose')
require('dotenv').config()

async function main() {
    const uri = process.env.MONGODB_URI
    if (!uri) {
        console.error('MONGODB_URI is missing in .env')
        process.exit(1)
    }

    try {
        await mongoose.connect(uri, { dbName: 'auto_insurance_db' })
        console.log('✅ Connected to MongoDB Atlas')

        const adminDb = mongoose.connection.db.admin()
        const { databases } = await adminDb.listDatabases()
        console.log('Databases:', databases.map(d => d.name))

        await mongoose.disconnect()
        console.log('✅ Disconnected')
    } catch (err) {
        console.error('❌ Connection error:', err.message)
        process.exit(1)
    }
}

main()
