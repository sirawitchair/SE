# Generated by Django 4.1.5 on 2023-02-10 09:38

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "permission",
                    models.PositiveIntegerField(
                        blank=True,
                        choices=[(0, "User"), (1, "SA"), (2, "")],
                        default=0,
                        null=True,
                        verbose_name="Permission",
                    ),
                ),
                ("email", models.EmailField(max_length=254, verbose_name="Email")),
                ("password", models.CharField(max_length=20, verbose_name="Password")),
                (
                    "first_name",
                    models.CharField(max_length=50, verbose_name="FirstName"),
                ),
                ("last_name", models.CharField(max_length=50, verbose_name="LastName")),
                (
                    "sex",
                    models.CharField(
                        choices=[(0, "Male"), (1, "Female"), (2, "Other")],
                        default=0,
                        max_length=2,
                        verbose_name="Sex",
                    ),
                ),
                ("birth_day", models.DateField(verbose_name="Birthday")),
                ("mobile", models.CharField(max_length=10, verbose_name="Phonenumber")),
                (
                    "person_id",
                    models.CharField(
                        max_length=13, unique=True, verbose_name="Person ID"
                    ),
                ),
                ("address", models.TextField(verbose_name="Address")),
                (
                    "date",
                    models.DateField(default=datetime.date.today, verbose_name="Date"),
                ),
            ],
            options={
                "verbose_name_plural": "User",
            },
        ),
    ]
