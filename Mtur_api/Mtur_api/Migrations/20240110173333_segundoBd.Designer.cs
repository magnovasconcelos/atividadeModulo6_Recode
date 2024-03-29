﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Mtur_api.Context;

#nullable disable

namespace Mtur_api.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20240110173333_segundoBd")]
    partial class segundoBd
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.26")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Mtur_api.Models.Cliente", b =>
                {
                    b.Property<string>("cpf")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("email")
                        .HasColumnType("longtext");

                    b.Property<string>("nome")
                        .HasColumnType("longtext");

                    b.Property<string>("telefone")
                        .HasColumnType("longtext");

                    b.HasKey("cpf");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("Mtur_api.Models.Destino", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<double>("preco")
                        .HasColumnType("double");

                    b.HasKey("Id");

                    b.ToTable("Destinos");
                });
#pragma warning restore 612, 618
        }
    }
}
