<template>
  <div class="signup-container">

    <div class="signup-box">

      <div class="header">

  <div class="logo">
    💰
  </div>

  <h1>Welcome Back</h1>

  <p>
    Sign in to track expenses, monitor savings, and manage your finances.
  </p>

</div>

      <form @submit.prevent="login">

        <div class="input-group">
          <label>Username or Email</label>

          <input
            type="text"
            v-model="form.identifier"
            placeholder="Enter username or email"
          >
        </div>

        <div class="input-group">

          <div class="label-row">

            <label>Password</label>

            <RouterLink
              to="/forgot-password"
              class="forgot-link"
            >
              Forgot Password?
            </RouterLink>

          </div>

          <div class="password-box">

            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              placeholder="Enter password"
            >

            <span
              class="toggle"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '🙈' : '👁' }}
            </span>

          </div>

        </div>

        <button type="submit">
          Sign In
        </button>

      </form>

      <div class="footer">
        Don't have an account?

        <RouterLink to="/signup">
          Create Account
        </RouterLink>
      </div>

    </div>

  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showPassword = ref(false);

// Login form data
const form = reactive({
  identifier: "",
  password: ""
});

// Login function
async function login() {

  // Validation
  if (
    !form.identifier.trim() ||
    !form.password.trim()
  ) {
    alert("Please fill all fields");
    return;
  }

  // Data sent to backend
  const loginData = {
    identifier: form.identifier,
    password: form.password
  };

  try {

    // API call to Spring Boot
    const response = await fetch(
      "http://localhost:8080/api/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(loginData)
      }
    );

    // Convert response safely
    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

    // Success
    if (response.ok) {

      alert("Login successful!");

      console.log("Backend Response:", data);

      // OPTIONAL:
      // Save JWT token if backend returns one
      // localStorage.setItem("token", data.token);

      // Reset form
      form.identifier = "";
      form.password = "";

      // Redirect to dashboard/home
      router.push("/dashboard");

    } else {

      // Backend error message
      alert(data.message || "Invalid username or password");

    }

  } catch (error) {

    console.error("Error:", error);

    alert("Cannot connect to Spring Boot server");

  }
}
</script>

<style scoped>

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

.signup-container{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:24px;

  background:
  linear-gradient(
    135deg,
    #2e1065 0%,
    #4c1d95 40%,
    #5b21b6 75%,
    #6d28d9 100%
  );
}

.signup-box{
  width:100%;
  max-width:460px;

  background:rgba(255,255,255,.96);

  border-radius:16px;

  padding:40px;

  border:1px solid rgba(255,255,255,.2);

  box-shadow:
    0 25px 60px rgba(0,0,0,.25),
    0 10px 30px rgba(91,33,182,.15);

  transition:.3s;
}

.signup-box:hover{
  transform:translateY(-3px);
}

.header{
  text-align:center;
  margin-bottom:32px;
}

.header h1{
  font-size:34px;
  font-weight:800;
  color:#4c1d95;
  letter-spacing:-1px;
  margin-bottom:10px;
}

.header p{
  color:#71717a;
  font-size:15px;
  line-height:1.5;
}

.input-group{
  margin-bottom:20px;
}

.input-group label{
  display:block;
  margin-bottom:8px;

  color:#27272a;
  font-size:14px;
  font-weight:600;
}

.label-row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:8px;
}

.forgot-link{
  text-decoration:none;
  color:#6d28d9;
  font-size:13px;
  font-weight:600;
  transition:.3s;
}

.forgot-link:hover{
  color:#4c1d95;
}

.input-group input{
  width:100%;

  padding:15px 16px;

  border:1px solid #e4e4e7;

  border-radius:12px;

  background:#fafafa;

  color:#18181b;

  font-size:15px;

  outline:none;

  transition:.25s;
}

.input-group input:hover{
  border-color:#a78bfa;
}

.input-group input:focus{

  background:white;

  border-color:#6d28d9;

  box-shadow:
    0 0 0 4px rgba(109,40,217,.20);
}

.password-box{
  position:relative;
}

.password-box input{
  padding-right:55px;
}

.toggle{
  position:absolute;
  right:16px;
  top:50%;
  transform:translateY(-50%);

  cursor:pointer;

  font-size:18px;

  opacity:.75;

  transition:.3s;
}

.toggle:hover{
  opacity:1;
  transform:translateY(-50%) scale(1.08);
}

button{
  width:100%;

  margin-top:10px;

  border:none;

  padding:16px;

  border-radius:12px;

  background:
  linear-gradient(
    135deg,
    #6d28d9,
    #5b21b6
  );

  color:white;

  font-size:15px;
  font-weight:700;

  cursor:pointer;

  transition:.3s;
}

button:hover{

  transform:translateY(-2px);

  box-shadow:
    0 15px 35px rgba(91,33,182,.35);
}

button:active{
  transform:translateY(0);
}

.footer{
  text-align:center;

  margin-top:28px;

  color:#71717a;

  font-size:14px;
}

.footer a{
  color:#6d28d9;

  text-decoration:none;

  font-weight:700;

  margin-left:4px;

  transition:.3s;
}

.footer a:hover{
  color:#4c1d95;
}

@media(max-width:500px){

  .signup-container{
    padding:16px;
  }

  .signup-box{
    padding:28px 22px;
    border-radius:14px;
  }

  .header h1{
    font-size:28px;
  }

}

</style>