import pytest
from django.contrib.auth.models import User
from auth_app.models import Profile

@pytest.mark.django_db
def test_profile_creation():
    # First, create a user
    user = User.objects.create_user(username='testuser', password='password123')

    # Then, create a profile linked to this user
    profile = Profile.objects.create(user=user, bio='Test bio')

    # Now, assert everything was created properly
    assert Profile.objects.count() == 1
    assert profile.user.username == 'testuser'
    assert profile.bio == 'Test bio'



