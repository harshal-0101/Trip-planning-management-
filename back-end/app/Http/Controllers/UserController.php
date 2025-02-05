<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
     // GET all users
     public function index()
     {
         $users = User::all();
         return response()->json($users);
     }
 
     // GET a single user
     public function show($id)
     {
         $user = User::find($id);
 
         if (!$user) {
             return response()->json(['message' => 'User not found'], 404);
         }
 
         return response()->json($user);
     }
 
     // POST a new user
     public function store(Request $request)
     {
         $request->validate([
             'name' => 'required|string|max:255',
             'email' => 'required|string|email|max:255|unique:users',
             'password' => 'required|string|min:8|confirmed',
         ]);
 
         $user = new User();
         $user->name = $request->name;
         $user->email = $request->email;
         $user->password = Hash::make($request->password);
         $user->save();
 
         return response()->json($user, 201);
     }
 
     // PUT update a user
     public function update(Request $request, $id)
     {
         $user = User::find($id);
 
         if (!$user) {
             return response()->json(['message' => 'User not found'], 404);
         }
 
         $request->validate([
             'name' => 'sometimes|required|string|max:255',
             'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $id,
             'password' => 'sometimes|required|string|min:8|confirmed',
         ]);
 
         $user->name = $request->name ?? $user->name;
         $user->email = $request->email ?? $user->email;
         if ($request->has('password')) {
             $user->password = Hash::make($request->password);
         }
         $user->save();
 
         return response()->json($user);
     }
 
     // DELETE a user
     public function destroy($id)
     {
         $user = User::find($id);
 
         if (!$user) {
             return response()->json(['message' => 'User not found'], 404);
         }
 
         $user->delete();
 
         return response()->json(['message' => 'User deleted successfully']);
     }
}
