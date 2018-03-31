<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog_model extends CI_Model{

    public function find_blog_type_by_user($user_id){
        return $this->db
                ->get_where('t_blog_type', array('user_id'=>$user_id))
                ->result();
    }

}
