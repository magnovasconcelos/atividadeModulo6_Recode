using Microsoft.EntityFrameworkCore;
using Mtur_api.Models;

namespace Mtur_api.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Destino> Destinos { get; set; }
        public DbSet<Contato> Contatos { get; set;}
        public DbSet<Reserva> Reservas { get; set; }
    }
}
