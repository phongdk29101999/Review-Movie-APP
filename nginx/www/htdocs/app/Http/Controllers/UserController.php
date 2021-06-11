<?php
//phpcs:disable
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Review;
use Illuminate\Support\Facades\Validator;

/**
 * This will suppress all the PMD warnings in
 * this class.
 *
 * @SuppressWarnings(PHPMD)
 */
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
   
    public function store(Request $request)
    {
        $validator              =        Validator::make($request->all(), [
            "name"              =>     "required",
            "email"        =>     "required",
            "password"           =>     "required",
        ]);
        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }
        $userDataArray          =       array(
            "name"               =>          $request->name,
            "email"              =>          $request->email,
            "password"           =>          md5($request->password),
        );

        $user                   =           User::create($userDataArray);
        return response()->json(["Add User Successfully.", $user]);
    }
  

    /**
     * Display the specified resource.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function show(User $user)
    {
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
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        
        $user->email = $request->get('email');
        $user->password = $request->get('password');
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
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json([
            'message' => 'user deleted'
        ]);
        
    }
    
    public function getTotalUser()
    {
        $user = User::count();
        return response()->json($user);
    }
    public function test($id)
    {
        $user = User::count();
        return response()->json($user->review_user());
    }
    
}
