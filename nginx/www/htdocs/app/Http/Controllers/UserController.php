<?php
//phpcs:disable
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Review;

/**
 * This will suppress all the PMD warnings in
 * this class.
 *
 * @SuppressWarnings(PHPMD)
 */
class UserController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index() {
        $users = User::all();
        return response()->json($users)->withHeaders([
            'Content-Range' => 'users 0-4/27',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => "required",
            "password" => "required",
        ]);
        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }
        $userDataArray = array(
            "name" => $request->name,
            "email" => $request->email,
            "password" => md5($request->password),
        );

        $user = User::create($userDataArray);
        return response()->json(["Add User Successfully.", $user]);
    }
  

    /**
     * Display the specified resource.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function show(User $user) {
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function update(Request $request, $id) {
        $user = User::find($id);
        if ($request->get('email'))
            $user->email = $request->get('email');
        if ($request->get('password'))
            $user->password = $request->get('password');
        if ($request->get('name'))
            $user->name = $request->get('name');
        $user->save();
        return response()->json([
            'message' => 'User updated!',
            'user' => $user
        ]);
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function destroy($id) {
        $user = User::find($id);
        $user->delete();
        return response()->json([
            'message' => 'user deleted'
        ]);
        
    }
    
    public function getTotalUsers() {
        $user = User::count();
        return response()->json($user);
    }
}
