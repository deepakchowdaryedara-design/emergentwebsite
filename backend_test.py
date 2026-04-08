import requests
import sys
from datetime import datetime
import json

class NeuralTrixCMSAPITester:
    def __init__(self, base_url="https://business-clean.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []
        self.session = requests.Session()

    def run_test(self, name, method, endpoint, expected_status, data=None, auth_required=False):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = self.session.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = self.session.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = self.session.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = self.session.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if len(str(response_data)) > 500:
                        print(f"Response: Large response ({len(str(response_data))} chars)")
                    else:
                        print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response: {response.text[:200]}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:300]}")

            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response": response.text[:200] if response.text else ""
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": "ERROR",
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "", 200)

    def test_admin_login(self):
        """Test admin login"""
        login_data = {
            "email": "admin@neuraltrix.ai",
            "password": "NeuralAdmin2025!"
        }
        
        success, response = self.run_test(
            "Admin Login",
            "POST",
            "auth/login",
            200,
            data=login_data
        )
        
        if success and 'role' in response and response['role'] == 'admin':
            print(f"✅ Admin login successful - User: {response.get('email')}")
            return True
        return False

    def test_auth_me_without_login(self):
        """Test /auth/me without login (should fail)"""
        return self.run_test("Auth Me (No Login)", "GET", "auth/me", 401)

    def test_auth_me_with_login(self):
        """Test /auth/me with login"""
        return self.run_test("Auth Me (With Login)", "GET", "auth/me", 200)

    def test_logout(self):
        """Test logout"""
        return self.run_test("Logout", "POST", "auth/logout", 200)

    def test_blog_articles_public(self):
        """Test getting blog articles (public endpoint)"""
        return self.run_test("Get Blog Articles (Public)", "GET", "blog", 200)

    def test_blog_articles_published_only(self):
        """Test getting published blog articles only"""
        return self.run_test("Get Published Blog Articles", "GET", "blog?status=published", 200)

    def test_create_blog_article_without_auth(self):
        """Test creating blog article without authentication (should fail)"""
        test_article = {
            "title": "Test Article",
            "slug": "test-article",
            "category": "AI Tools",
            "excerpt": "Test excerpt",
            "content": [{"type": "paragraph", "text": "Test content"}],
            "status": "draft"
        }
        return self.run_test("Create Blog Article (No Auth)", "POST", "blog", 401, data=test_article)

    def test_create_blog_article_with_auth(self):
        """Test creating blog article with authentication"""
        test_article = {
            "title": f"Test Article {datetime.now().strftime('%H%M%S')}",
            "slug": f"test-article-{datetime.now().strftime('%H%M%S')}",
            "category": "AI Tools",
            "excerpt": "Test excerpt for automated testing",
            "content": [
                {"type": "heading", "text": "Test Heading"},
                {"type": "paragraph", "text": "This is test content for the blog article."}
            ],
            "status": "draft",
            "read_time": "3 min read"
        }
        
        success, response = self.run_test("Create Blog Article (With Auth)", "POST", "blog", 200, data=test_article)
        
        if success and 'id' in response:
            print(f"✅ Blog article created with ID: {response['id']}")
            return response['id']
        return None

    def test_update_blog_article(self, article_id):
        """Test updating blog article"""
        if not article_id:
            print("⚠️ Skipping update test - no article ID")
            return False
            
        update_data = {
            "title": "Updated Test Article",
            "status": "published"
        }
        return self.run_test(f"Update Blog Article {article_id}", "PUT", f"blog/{article_id}", 200, data=update_data)

    def test_delete_blog_article(self, article_id):
        """Test deleting blog article"""
        if not article_id:
            print("⚠️ Skipping delete test - no article ID")
            return False
            
        return self.run_test(f"Delete Blog Article {article_id}", "DELETE", f"blog/{article_id}", 200)

    def test_testimonials_public(self):
        """Test getting testimonials (public endpoint)"""
        return self.run_test("Get Testimonials (Public)", "GET", "testimonials", 200)

    def test_create_testimonial_without_auth(self):
        """Test creating testimonial without auth (should fail)"""
        test_testimonial = {
            "name": "John Doe",
            "role": "CEO, Test Company",
            "text": "Great service!"
        }
        return self.run_test("Create Testimonial (No Auth)", "POST", "testimonials", 401, data=test_testimonial)

    def test_create_testimonial_with_auth(self):
        """Test creating testimonial with auth"""
        test_testimonial = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "role": "QA Tester, NeuralTrix",
            "text": "Automated testing works perfectly!"
        }
        
        success, response = self.run_test("Create Testimonial (With Auth)", "POST", "testimonials", 200, data=test_testimonial)
        
        if success and 'id' in response:
            print(f"✅ Testimonial created with ID: {response['id']}")
            return response['id']
        return None

    def test_jobs_public(self):
        """Test getting jobs (public endpoint)"""
        return self.run_test("Get Jobs (Public)", "GET", "jobs", 200)

    def test_create_job_with_auth(self):
        """Test creating job with auth"""
        test_job = {
            "title": f"Test Position {datetime.now().strftime('%H%M%S')}",
            "department": "Engineering",
            "location": "Remote",
            "type": "Full-Time",
            "experience": "2+ years",
            "description": "Test job description",
            "responsibilities": ["Test responsibility 1", "Test responsibility 2"],
            "requirements": ["Test requirement 1", "Test requirement 2"],
            "status": "active"
        }
        
        success, response = self.run_test("Create Job (With Auth)", "POST", "jobs", 200, data=test_job)
        
        if success and 'id' in response:
            print(f"✅ Job created with ID: {response['id']}")
            return response['id']
        return None

    def test_case_studies_public(self):
        """Test getting case studies (public endpoint)"""
        return self.run_test("Get Case Studies (Public)", "GET", "case-studies", 200)

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "first_name": "John",
            "last_name": "Doe", 
            "email": "john.doe@test.com",
            "phone": "+1-555-123-4567",
            "description": "Test contact form submission for NeuralTrix AI CMS"
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        
        if success and 'id' in response:
            print(f"✅ Contact submission created with ID: {response['id']}")
            return response['id']
        return None

    def test_get_contacts_without_auth(self):
        """Test getting contacts without auth (should fail)"""
        return self.run_test("Get Contacts (No Auth)", "GET", "contact", 401)

    def test_get_contacts_with_auth(self):
        """Test getting contacts with auth"""
        return self.run_test("Get Contacts (With Auth)", "GET", "contact", 200)

    def test_analytics_without_auth(self):
        """Test analytics without auth (should fail)"""
        return self.run_test("Analytics Overview (No Auth)", "GET", "analytics/overview", 401)

    def test_analytics_with_auth(self):
        """Test analytics with auth"""
        return self.run_test("Analytics Overview (With Auth)", "GET", "analytics/overview", 200)

    def test_top_articles_with_auth(self):
        """Test top articles analytics with auth"""
        return self.run_test("Top Articles Analytics (With Auth)", "GET", "analytics/top-articles", 200)

def main():
    print("🚀 Starting NeuralTrix AI CMS Backend API Tests")
    print("=" * 60)
    
    # Setup
    tester = NeuralTrixCMSAPITester()
    
    # Test basic connectivity
    print("\n📡 Testing API Connectivity...")
    tester.test_root_endpoint()
    
    # Test public endpoints (no auth required)
    print("\n🌐 Testing Public Endpoints...")
    tester.test_blog_articles_public()
    tester.test_blog_articles_published_only()
    tester.test_testimonials_public()
    tester.test_jobs_public()
    tester.test_case_studies_public()
    
    # Test contact form
    print("\n📝 Testing Contact Form...")
    contact_id = tester.test_contact_submission()
    
    # Test auth endpoints without login
    print("\n🔒 Testing Auth Protection...")
    tester.test_auth_me_without_login()
    tester.test_create_blog_article_without_auth()
    tester.test_create_testimonial_without_auth()
    tester.test_get_contacts_without_auth()
    tester.test_analytics_without_auth()
    
    # Test admin login
    print("\n👤 Testing Admin Authentication...")
    login_success = tester.test_admin_login()
    
    if login_success:
        # Test authenticated endpoints
        print("\n🔓 Testing Authenticated Endpoints...")
        tester.test_auth_me_with_login()
        tester.test_get_contacts_with_auth()
        tester.test_analytics_with_auth()
        tester.test_top_articles_with_auth()
        
        # Test CRUD operations
        print("\n📚 Testing Blog CRUD Operations...")
        article_id = tester.test_create_blog_article_with_auth()
        tester.test_update_blog_article(article_id)
        tester.test_delete_blog_article(article_id)
        
        print("\n💬 Testing Testimonial Creation...")
        testimonial_id = tester.test_create_testimonial_with_auth()
        
        print("\n💼 Testing Job Creation...")
        job_id = tester.test_create_job_with_auth()
        
        # Test logout
        print("\n🚪 Testing Logout...")
        tester.test_logout()
    else:
        print("❌ Admin login failed - skipping authenticated tests")
    
    # Print results
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("❌ Some tests failed!")
        print("\nFailed tests:")
        for result in tester.test_results:
            if not result['success']:
                error_msg = result.get('error', f'Status {result["actual_status"]}')
                print(f"  - {result['name']}: {error_msg}")
        return 1

if __name__ == "__main__":
    sys.exit(main())