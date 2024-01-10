using System.ComponentModel.DataAnnotations;

namespace Mtur_api.Models
{
    public class Destino
    {
        [Key]
        public int Id { get; set; }
        public string nome { get; set; }
        public double preco { get; set; }
    }
}
