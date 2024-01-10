using System.ComponentModel.DataAnnotations;

namespace Mtur_api.Models
{
    public class Contato
    {
        [Key]
        public int Id { get; set; }
        public string mensagem { get; set; }
        public string assunto { get; set; }
    }
}
