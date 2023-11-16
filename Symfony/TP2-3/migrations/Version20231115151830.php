<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231115151830 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE participant (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, mail VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE participant_spectacle (participant_id INT NOT NULL, spectacle_id INT NOT NULL, INDEX IDX_2652B9D09D1C3019 (participant_id), INDEX IDX_2652B9D0C682915D (spectacle_id), PRIMARY KEY(participant_id, spectacle_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE participant_spectacle ADD CONSTRAINT FK_2652B9D09D1C3019 FOREIGN KEY (participant_id) REFERENCES participant (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE participant_spectacle ADD CONSTRAINT FK_2652B9D0C682915D FOREIGN KEY (spectacle_id) REFERENCES spectacle (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE participant_spectacle DROP FOREIGN KEY FK_2652B9D09D1C3019');
        $this->addSql('ALTER TABLE participant_spectacle DROP FOREIGN KEY FK_2652B9D0C682915D');
        $this->addSql('DROP TABLE participant');
        $this->addSql('DROP TABLE participant_spectacle');
    }
}
