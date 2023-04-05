from django.contrib import admin
from .models import CustomUser
# Register your models here.
# @admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('date','full_name','location', 'description', 'image', 'status')
    list_display_links = ['full_name']
    list_editable  = ['status',]
    # list_filter = ('unit',)
    # ordering = ('-last_login','current_unit','rank',)
    date_hierarchy = 'date'
    # save_as = True
    def get_queryset(self, request):
        qs = super(CustomUserAdmin, self).get_queryset(request)
        currect_user = request.user
        user_groups = [g.name for g in currect_user.groups.all()]
        if 'SA' in user_groups:            
            qs = CustomUser.objects.filter(groups=currect_user.groups)
        #     pass
        # elif 'UnitAdmin' in user_groups:            
        #     qs = Patient.objects.filter(unit = currect_user.unit)
        # else:            
        #     qs = Patient.objects.filter(data_user = currect_user)
        # elif 'MedicalUser' in user_groups:
        #     qs = Patient.objects.filter(document_approved = True)

        # qs = qs.order_by('-date')
        return qs