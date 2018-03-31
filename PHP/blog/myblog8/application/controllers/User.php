<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

    public function login(){
        //1. 接收数据
        $email = $this->input->post('email');
        $pwd = $this->input->post('pwd');


        //2. 连数据库
        $this->load->model('user_model');
        $user = $this->user_model->find_by_email_pwd($email, $pwd);
        if($user){
            $this->session->set_userdata('user', $user);
            //$this->load->view('adminIndex', array('email'=>$email));
            echo 'success';
        }else{
            echo 'fail';
        }
    }

    public function reg(){
        $email = $this->input->post('email');
        $pwd = $this->input->post('pwd');
        $username = $this->input->post('username');
        $sex = $this->input->post('sex');

        $this->load->model('user_model');
        $row  = $this->user_model->save($email, $pwd, $username, $sex);
        if($row > 0){
            echo 'success';
        }else{
            echo 'fail';
        }
    }

    public function check_name(){
        $email = $this->input->get('email');

        $this->load->model('user_model');
        $user  = $this->user_model->find_by_email($email);
        if($user){
            echo 'fail';
        }else{
            echo 'success';
        }
    }
}
