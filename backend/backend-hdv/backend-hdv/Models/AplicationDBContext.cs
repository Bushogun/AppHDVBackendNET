using Microsoft.EntityFrameworkCore;

namespace backend_hdv.Models
{
    public class AplicationDBContext: DbContext 
    {
        public AplicationDBContext(DbContextOptions<AplicationDBContext> options) : base(options) { 
        
        }

        public DbSet <PersonalInfo> PersonalInfo { get; set; }
        public DbSet<Skills> Skillss { get; set; }
        public DbSet<SocialMedia> SocialMedias { get; set; }
        public DbSet<WorkExperience> WorkExperiences { get; set; }
    }
}
