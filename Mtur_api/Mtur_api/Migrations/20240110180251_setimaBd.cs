using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mtur_api.Migrations
{
    public partial class setimaBd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Destinos",
                newName: "nome");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "nome",
                table: "Destinos",
                newName: "Name");
        }
    }
}
