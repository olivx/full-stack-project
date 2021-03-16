from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_admin', True)
        return self._create_user(email,
                                 password,
                                 **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    ROLES = (
        (1, "Viewer"),
        (2, "Editor"),
        (3, "Admin"),
    )

    email = models.EmailField(unique=True, verbose_name="Email")
    first_name = models.CharField(verbose_name="First Name", max_length=255, null=True)
    last_name = models.CharField(verbose_name="Last Name", max_length=255, null=True)
    role = models.IntegerField(default=1, choices=ROLES)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    @property
    def full_name(self):
        if not self.first_name and not self.last_name:
            return self.email
        return "%s %s" % (self.first_name, self.last_name)
