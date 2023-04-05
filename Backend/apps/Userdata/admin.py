from django.contrib import admin

from .models import CustomUser

# @admin.register(Profile)


@admin.register(CustomUser)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name','last_name','mobile', 'person_id','last_login')
    list_display_links = ['email']
    list_filter = ( 'groups',)
    search_fields=('email','person_id')
    ordering = ('-last_login',)
    save_as = True