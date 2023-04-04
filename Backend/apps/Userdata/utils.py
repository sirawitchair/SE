# from django.contrib.auth import authenticate, login
# from django.contrib.auth.models import Permission

# def authenticate_user(request, username_or_email, password, permission_name):
#     # Check if the provided username is an email address
#     if '@' in username_or_email:
#         # Look up the user by email address
#         try:
#             user = User.objects.get(email=username_or_email)
#         except User.DoesNotExist:
#             return None
#         # Use the user's username as the username parameter for authentication
#         username = user.username
#     else:
#         # Use the provided username as the username parameter for authentication
#         username = username_or_email

#     # Authenticate the user with the provided username (or email address) and password
#     user = authenticate(request, username=username, password=password)
    
#     # Check if the user has the required permission
#     if user is not None and user.has_perm(permission_name):
#         # Log the user in
#         login(request, user)
#         return user
    
#     return None