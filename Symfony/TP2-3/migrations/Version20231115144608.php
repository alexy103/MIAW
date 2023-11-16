<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231115144608 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE spectacle DROP FOREIGN KEY FK_E55076F4A2C806AC');
        $this->addSql('DROP INDEX IDX_E55076F4A2C806AC ON spectacle');
        $this->addSql('ALTER TABLE spectacle CHANGE lieux_id lieu_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE spectacle ADD CONSTRAINT FK_E55076F46AB213CC FOREIGN KEY (lieu_id) REFERENCES lieu (id)');
        $this->addSql('CREATE INDEX IDX_E55076F46AB213CC ON spectacle (lieu_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE spectacle DROP FOREIGN KEY FK_E55076F46AB213CC');
        $this->addSql('DROP INDEX IDX_E55076F46AB213CC ON spectacle');
        $this->addSql('ALTER TABLE spectacle CHANGE lieu_id lieux_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE spectacle ADD CONSTRAINT FK_E55076F4A2C806AC FOREIGN KEY (lieux_id) REFERENCES lieu (id)');
        $this->addSql('CREATE INDEX IDX_E55076F4A2C806AC ON spectacle (lieux_id)');
    }
}
