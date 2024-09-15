import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorkShops1725988439796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO workshop_entity (name, description, capacity, "startDate", "endDate", "isActive", "created_at", "updated_at")
            VALUES 
              ('O poder da Autoliderança, Desvende Seu Potencial', 'Guia para desenvolver habilidades de liderança pessoal e alcançar metas.', 30, '2024-09-10', '2024-12-31', true, NOW(), NOW()),
              ('Conferencia de Medicina', 'Encontro de profissionais da saúde para discutir avanços e desafios da área.', 25, '2024-09-10', '2024-12-31', true, NOW(), NOW()),
              ('Novos medicamentos em teste', 'Apresentação de novas drogas em desenvolvimento e seus potenciais benefícios.', 20, '2024-09-10', '2024-12-31', true, NOW(), NOW()),
              ('Situação epidemiológica e resposta à mpox no Brasil', 'Análise da disseminação da mpox no país e as estratégias de controle.', 20, '2024-09-10', '2024-12-31', true, NOW(), NOW()),
              ('Fundamentos Matemáticos da Computação', 'Estudo dos princípios matemáticos que sustentam a ciência da computação.', 20, '2024-09-10', '2024-12-31', true, NOW(), NOW()),
              ('Gráfico pizza ainda é a melhor opção', 'Discussão sobre a eficácia e aplicabilidade dos gráficos de pizza na visualização de dados.', 20, '2024-09-10', '2024-12-31', true, NOW(), NOW()),
              ('Business Training - A importância de conhecer', 'Sessão de treinamento para empresários discutindo a importância de entender os conceitos-chave.', 20, '2024-09-10', '2024-12-31', true, NOW(), NOW()),
              ('Jornada UX edição #3', 'Terceira edição de um evento dedicado à experiência do usuário, com foco em design e tecnologia.', 20, '2024-09-10', '2024-12-31', true, NOW(), NOW());
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM workshop_entity;
          `);
    }
}
