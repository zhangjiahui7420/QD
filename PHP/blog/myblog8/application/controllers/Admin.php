<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller
{

    public function index()
    {

        $this->load->view('admin_index');

    }


    public function new_blog()
    {
        $user = $this->session->userdata('user');
        if($user){
            $this->load->model('blog_model');
            $types = $this->blog_model->find_blog_type_by_user($user->user_id);
            $this->load->view('new_blog', array(
                'blog_types' => $types
            ));

        }

    }

}
