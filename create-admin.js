const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 10); // Contraseña para la prueba

    const admin = await prisma.user.upsert({
        where: { email: 'admin@zambipan.com' },
        update: {},
        create: {
            email: 'admin@zambipan.com',
            name: 'Admin ZambiPan',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log('✅ Usuario Admin creado:', admin.email);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
