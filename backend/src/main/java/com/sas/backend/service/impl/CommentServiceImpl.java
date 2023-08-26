package com.sas.backend.service.impl;

import com.sas.backend.dto.CommentDto;
import com.sas.backend.entity.Comment;
import com.sas.backend.entity.User;
import com.sas.backend.repository.CommentRepository;
import com.sas.backend.repository.UserRepository;
import com.sas.backend.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {

    private CommentRepository commentRepo;
    @Override
    public void delete(Long commentId) {
        commentRepo.deleteById(commentId);
    }

    @Override
    public Comment save(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setCreateBy(commentDto.getCreateBy());
        comment.setText(commentDto.getText());

        if (comment.getId() == null)
            comment.setCreatedDate(ZonedDateTime.now());
        else
            comment.setCreatedDate(commentDto.getCreatedDate());
        Comment savedComment = commentRepo.save(comment);
        String message = "There's a new comment #" + "\n\n" + savedComment.getCreateBy() + ": " + savedComment.getText();

        return savedComment;
    }

    @Override
    public List<Comment> getAllComments() {
        return commentRepo.findAll();
    }
}
