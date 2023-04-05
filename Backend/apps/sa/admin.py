from django.contrib import admin
from .models import SA
# Register your models here.
# @admin.register(SA)
class SAAdmin(admin.ModelAdmin):
    list_display = ('date','full_name','location', 'description', 'image', 'status')
    list_display_links = ['full_name']
    # list_editable  = ['status',]
    # list_filter = ('unit',)
    # ordering = ('-last_login','current_unit','rank',)
    date_hierarchy = 'date'
    save_as = True
    # save_as = True

admin.site.register(SA, SAAdmin)