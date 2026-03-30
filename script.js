
async function fetchGitHubUser() {
    const usernameInput = document.getElementById('usernameInput');
    const username = usernameInput.value.trim() || 'Utkarsh12072007';
    const resultCard = document.getElementById('resultCard');
    const errorMsg = document.getElementById('errorMessage');
    const searchBtn = document.getElementById('inspectButton');

    usernameInput.value = username;

    // Show a clear loading state while the profile is being fetched.
    searchBtn.innerText = "Inspecting...";
    searchBtn.disabled = true;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error('User not found');
        }

        const data = await response.json();

        document.getElementById('userAvatar').src = data.avatar_url;
        document.getElementById('userName').innerText = data.name || 'Anonymous User';
        document.getElementById('userLogin').innerText = `@${data.login}`;
        document.getElementById('profileLink').href = data.html_url;

        document.getElementById('repoCount').innerText = data.public_repos;
        document.getElementById('followerCount').innerText = data.followers;
        document.getElementById('followingCount').innerText = data.following;
        document.getElementById('userBio').innerText = data.bio || 'This user has no bio set.';
        document.getElementById('userCompany').innerText = data.company || 'Not available';
        document.getElementById('userLocation').innerText = data.location || 'Not available';
        document.getElementById('userType').innerText = data.type || 'Not available';
        document.getElementById('userTwitter').innerText = data.twitter_username || 'Not available';
        document.getElementById('userEmail').innerText = data.email || 'Not available';
        document.getElementById('userId').innerText = data.id || 'Not available';

        const blogElement = document.getElementById('userBlog');
        if (data.blog) {
            const blogUrl = data.blog.startsWith('http') ? data.blog : `https://${data.blog}`;
            blogElement.href = blogUrl;
            blogElement.innerText = data.blog;
        } else {
            blogElement.href = '#';
            blogElement.innerText = 'Not available';
        }

        const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
        const joinDate = new Date(data.created_at).toLocaleDateString('en-GB', dateOptions);
        document.getElementById('joinDate').innerText = joinDate;

        resultCard.classList.remove('hidden');
        errorMsg.classList.add('hidden');
    } catch (error) {
        resultCard.classList.add('hidden');
        errorMsg.classList.remove('hidden');
        console.error("Git Inspector Error:", error.message);
    } finally {
        searchBtn.innerText = "Inspect Profile";
        searchBtn.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('usernameInput');

    usernameInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            fetchGitHubUser();
        }
    });

    fetchGitHubUser();
});
