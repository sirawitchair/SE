# Generated by Django 4.1.5 on 2023-02-10 09:38

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("User", "__first__"),
    ]

    operations = [
        migrations.CreateModel(
            name="SA",
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
                ("Status", models.BooleanField(default=False, verbose_name="Status")),
                ("image", models.ImageField(upload_to="", verbose_name="Image")),
                ("description", models.TextField(verbose_name="Description")),
                ("location", models.CharField(max_length=50, verbose_name="Location")),
                (
                    "date",
                    models.DateField(default=datetime.date.today, verbose_name="Date"),
                ),
                ("time", models.TimeField(auto_now_add=True, verbose_name="Time")),
                (
                    "data_user",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="DataUser",
                        to="User.user",
                        verbose_name="Recoder",
                    ),
                ),
            ],
            options={
                "verbose_name_plural": "Table SA",
            },
        ),
    ]
