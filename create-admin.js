const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
    // Encriptamos la contraseña para que sea segura
    const hashedPassword = await bcrypt.hash('admin123', 10);

    const admin = await prisma.user.upsert({
        where: { username: 'admin' },
        update: {
            password: hashedPassword,
        },
        create: {
            username: 'admin',
            name: 'Administrador Principal',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log('------------------------------------------');
    console.log('✅ USUARIO ADMINISTRADOR CREADO/ACTUALIZADO');
    console.log(`👤 Usuario: ${admin.username}`);
    console.log('🔑 Contraseña: admin123');
    console.log('------------------------------------------');
}

main()
    .catch((e) => {
        console.error('❌ Error al crear el admin:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });