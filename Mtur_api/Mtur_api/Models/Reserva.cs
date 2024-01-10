using System.ComponentModel.DataAnnotations;

namespace Mtur_api.Models
{
    public class Reserva
    {
        [Key]
        public int numeroReserva { get; set; }
        public DateTime dataReserva { get; set; }
        public string formaPagamento { get; set; }
        public double valorReserva { get; set; }
    }
}
