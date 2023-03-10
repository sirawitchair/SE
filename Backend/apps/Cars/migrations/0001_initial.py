# Generated by Django 4.1.5 on 2023-02-10 09:50

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("User", "0002_alter_user_email"),
    ]

    operations = [
        migrations.CreateModel(
            name="Cars",
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
                ("model", models.CharField(max_length=10, verbose_name="Model")),
                (
                    "acceleration",
                    models.CharField(max_length=10, verbose_name="Acceleration"),
                ),
                ("topspeed", models.CharField(max_length=10, verbose_name="TopSpeed")),
                ("range", models.CharField(max_length=10, verbose_name="Range")),
                (
                    "horsepower",
                    models.CharField(max_length=10, verbose_name="HorsePower"),
                ),
                (
                    "batterycapacity",
                    models.CharField(max_length=10, verbose_name="BatteryCapacity"),
                ),
                (
                    "chargingtype",
                    models.CharField(
                        choices=[
                            (0, "CHAdeMo"),
                            (1, "GB/T"),
                            (2, "CCS Type1"),
                            (3, "CCS Type2"),
                            (4, "Type1"),
                            (5, "Type2"),
                        ],
                        max_length=10,
                        verbose_name="ChargingType",
                    ),
                ),
                (
                    "slowchargetime",
                    models.CharField(max_length=10, verbose_name="SlowChargeTime"),
                ),
                (
                    "fastchargetime",
                    models.CharField(max_length=10, verbose_name="FastChargeTime"),
                ),
                (
                    "cartype",
                    models.CharField(
                        choices=[
                            (0, "Sedan"),
                            (1, "Hatchback"),
                            (2, "Station Wagon"),
                            (3, "Crossover"),
                            (4, "SUV"),
                            (5, "PPV"),
                            (6, "Pickup"),
                            (7, "Mini MPV"),
                            (8, "Van"),
                            (9, "Cabrio"),
                            (10, "Sportcar"),
                        ],
                        max_length=10,
                        verbose_name="CarType",
                    ),
                ),
                ("seat", models.CharField(max_length=10, verbose_name="Seat")),
                (
                    "modelyear",
                    models.CharField(max_length=10, verbose_name="ModelYear"),
                ),
                (
                    "date",
                    models.DateField(default=datetime.date.today, verbose_name="Date"),
                ),
                (
                    "data_user_cars",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="CarsUser",
                        to="User.user",
                        verbose_name="Recoder",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Cars",
            },
        ),
    ]
