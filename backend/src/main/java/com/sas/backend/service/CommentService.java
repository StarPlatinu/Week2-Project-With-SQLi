package com.sas.backend.service;


import com.sas.backend.dto.CommentDto;
import com.sas.backend.entity.Comment;

import java.util.List;

public interface CommentService {
    public void delete(Long commentId);
    public Comment save(CommentDto commentDto) ;
    List<Comment> getAllComments();
}
