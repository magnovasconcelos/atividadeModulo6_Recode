using System.ComponentModel.DataAnnotations;

namespace Mtur_api.Models
{
    public class Cliente
    {
        [Key]
        public string cpf { get; set; }
        public string nome { get; set; }
        public string email { get; set;}
        public string telefone { get; set;}

    }
}
