# Generated by Django 4.1.5 on 2023-02-10 09:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("User", "0002_alter_user_email"),
        ("sa", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="sa",
            name="data_user",
        ),
        migrations.AddField(
            model_name="sa",
            name="data_user_sa",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="SAUser",
                to="User.user",
                verbose_name="Recoder",
            ),
        ),
    ]
